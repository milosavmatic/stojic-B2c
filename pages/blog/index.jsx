import { useState } from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ApiHandler } from '../../helpers/api';
import classes from './Blog.module.scss';

const Seo = dynamic(() => import('../../components/Seo/Seo'));
// const BsArrowRight = dynamic(async () => {
// 	await import('react-icons/bs').BsArrowRight;
// });

const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));

const Blog = ({ blog }) => {
	const [thumbCount, setThumbCount] = useState(4);

	console.log('blog', blog);

	return (
		<>
			<Seo
				title="Blog"
				keywords="blog"
				description="Blog"
				ogtitle="Blog"
				ogdescription="Blog"
				ogurl={`${process.env.BASE_URL}blog`}
			/>
			<div className={classes.blogHolder}>
				<div className={classes.titleHolder}>
					<h5>Blog</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.{' '}
					</p>
				</div>
				<div className={classes.contentHolder}>
					{blog?.length ? (
						<Row>
							{(blog?.slice(0, thumbCount) ?? []).map((row) => (
								<Col xl={3} md={6} sm={6} xs={12} key={row?.id}>
									<Link href={`/blog/${row?.id}`}>
										<a>
											<div className={classes.postHolder} id={row.id}>
												<div className={classes.imgHolder}>
													<Image
														src={row.images.thumb_image}
														alt={row.title}
														layout="fill"
														priority
													/>
												</div>
												<div className={classes.txtHolder}>
													<h5>{row.basic_data.title ? row.basic_data.title : '/'}</h5>
													<span className={classes.date}>
														{row.basic_data.created_at.date_time}
													</span>
													<p>
														{row.basic_data.short_description
															? row.basic_data.short_description
															: '/'}
													</p>
													<span className={classes.more}>Pročitajte više</span>
												</div>
											</div>
										</a>
									</Link>
								</Col>
							))}

							{blog?.length > thumbCount && (
								<button
									type="button"
									className={classes.loadMore}
									onClick={() => setThumbCount(thumbCount + 4)}
								>
									Učitajte više...
								</button>
							)}
						</Row>
					) : (
						<p className="text-center">Trenutno je lista vesti prazna.</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Blog;

export const getStaticProps = async () => {
	const api = ApiHandler();

	return {
		props: {
			blog: (await api.list('news/category/list/all').then((response) => response?.payload.items)) ?? null,
		},
	};
};
