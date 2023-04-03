/* eslint-disable no-return-await */
/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classes from '../NavbarMenu.module.scss';

// const RiArrowRightSLine = dynamic(async () => await import('react-icons/ri/RiArrowRightSLine'));

const Categories = ({
	menu,
	setCategoryItemHandler,
	closeLeftSidebarModal,
	categoryItem,
	selectedCategoryId,
	setSelectedCatIdHandler,
	setSearchCategoryhandler,
	searchCategory,
	isMobile = false,
}) => {
	// console.log(menu)
	const clearModalData = () => {
		closeLeftSidebarModal();
		setCategoryItemHandler(null);
	};

	const convertChirilicLetter = (word) => {
		if (word.includes('č')) {
			return word.replace('č', 'c');
		}
		if (word.includes('ć')) {
			return word.replace('ć', 'c');
		}
		if (word.includes('ž')) {
			return word.replace('ž', 'z');
		}
		if (word.includes('đ')) {
			return word.replace('đ', 'dj');
		}
		if (word.includes('š')) {
			return word.replace('š', 's');
		}
		return word;
	};

	const filterByLabel = (array, searchTerm) => {
		if ((array ?? []).length > 0 && !isMobile) {
			return array.reduce((prev, curr) => {
				console.log(convertChirilicLetter(curr?.name.toLowerCase()));
				const children = curr.children ? filterByLabel(curr.children, searchTerm) : undefined;
				return convertChirilicLetter(curr.name.toLowerCase()).includes(
					convertChirilicLetter(searchTerm.toLowerCase())
				) || children?.length > 0
					? [...prev, { ...curr, children }]
					: prev;
			}, []);
		}
		return [];
	};

	const categoryData = filterByLabel(categoryItem?.children, searchCategory);

	return (
		<div className={classes.categoriesTree}>
			<ul className={classes['nav-submenu']}>
				<h5 className={`${classes['all-categories-title']}`}>Sve kategorije</h5>
				{menu.map((item) => (
					<>
						{item.children && item.children.length > 0 ? (
							<li
								key={item.id}
								className={classes['nav-submenu-item']}
								onClick={() => {
									setCategoryItemHandler(item);
									setSelectedCatIdHandler(item);
									setSearchCategoryhandler('');
								}}
							>
								<div className={classes['submenu-item-holder']}>
									<div className={classes.iconNameCat}>
										{item.icon ? (
											<Image src={item.icon} alt="Stojic Elektrik doo" width={30} height={30} />
										) : null}

										<p
											className={
												categoryItem?.id === item.id
													? ` ${classes.active} ${classes['category-name']}`
													: ''
											}
										>
											{item.name}
										</p>
									</div>

									{item.children && item.children.length > 0 ? (
										<FontAwesomeIcon
											icon={faAngleRight}
											className={
												selectedCategoryId === item.id
													? `${classes.rotate}`
													: '' || categoryItem?.id === item.id
													? ` ${classes.active}`
													: ''
											}
											color="#000"
										/>
									) : (
										''
									)}
								</div>
							</li>
						) : (
							<Link href={item.path} legacyBehavior>
								<a className={classes['submenu-item-holder']}>
									<li onClick={clearModalData}>
										{item.icon ? (
											<Image src={item.icon} alt="Stojic Elektrik doo" width={30} height={30} />
										) : null}
										<p>{item.name}</p>
									</li>
								</a>
							</Link>
						)}
						{/* ***** */}

						{selectedCategoryId === item.id && item ? (
							<div className={classes.subCategoryTreeMobile}>
								<div className={classes.subCategoryChildrenMobile}>
									<Link href={item.path} legacyBehavior>
										<a className={classes.categoryNameMobile}>
											<p onClick={clearModalData}>{item.name}</p>
										</a>
									</Link>
									{(categoryItem?.children ?? []).map((subCategory) => (
										<ul key={subCategory.id}>
											<Link href={subCategory.path} legacyBehavior>
												<a>
													<p onClick={clearModalData}>{subCategory.name}</p>
												</a>
											</Link>
											{subCategory.children && subCategory.children.length > 0
												? subCategory.children.map((subSubCategory) => (
														<Link
															key={subSubCategory.id}
															href={subSubCategory.path}
															legacyBehavior
														>
															<a>
																<li onClick={clearModalData}>{subSubCategory.name}</li>
															</a>
														</Link>
												  ))
												: null}
										</ul>
									))}
								</div>
							</div>
						) : null}
						{/* ****** */}
					</>
				))}
			</ul>

			{categoryItem ? (
				<div className={classes.subCategoryTree}>
					<Link href={categoryItem.path} legacyBehavior>
						<a className={classes.categoryName}>
							<h5 onClick={clearModalData}>{categoryItem.name}</h5>
						</a>
					</Link>
					<div className={classes.gridRightSideSubCat}>
						<>
							<form
								className={`${classes['header-search']} ${classes.headerSearchCat}`}
								// onSubmit={handleSearch}
							>
								<div className={classes.newsletter}>
									<input
										className={`${`${classes['newsletter-input']} basic-input`}`}
										type="text"
										name="search"
										id="search"
										value={searchCategory}
										onChange={({ target }) => setSearchCategoryhandler(target.value)}
										placeholder="Pretraga.."
									/>
								</div>
							</form>
							<div className={classes.subCategoryChildren}>
								{categoryData.length > 0 ? (
									categoryData.map((subCategory) => (
										<ul key={subCategory.id}>
											<Link href={subCategory.path} legacyBehavior>
												<a>
													<p onClick={clearModalData}>{subCategory.name}</p>
												</a>
											</Link>
											{(subCategory?.children ?? []).map((subSubCategory) => (
												<Link key={subSubCategory.id} href={subSubCategory.path} legacyBehavior>
													<a>
														<li onClick={clearModalData}>{subSubCategory.name}</li>
													</a>
												</Link>
											))}
										</ul>
									))
								) : (
									<p className={classes.noData}>Nema podataka za prikaz!</p>
								)}
							</div>
						</>

						{categoryItem.image != null && (
							<div className={classes.banner}>
								<Image src={categoryItem.image} alt="Stojic Elektrik doo" width={300} height={500} />
							</div>
						)}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Categories;
