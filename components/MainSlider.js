/* eslint-disable react/no-unknown-property */
import { Carousel } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import classes from './MainSlider.module.scss';

const MainSlider = ({ banners, mobileBanners }) => (
	<>
		<div className="mobile-hidden">
			<Carousel>
				{(banners ?? []).map((banner) => (
					<Carousel.Item className={`${classes['main-slider']}`} key={banner.id}>
						{banner.url ? (
							<Link href={banner.url} target="_blank">
								<div className={`${classes['desktop-display']}`}>
									<Image
										src={banner.image}
										alt="Stojic Elektrik doo"
										layout="fill"
										objectFit="cover"
										quality={100}
										priority
										sizes="100vw"
									/>
								</div>
							</Link>
						) : (
							<div className={`${classes['desktop-display']}`}>
								<Image
									src={banner.image}
									alt="Stojic Elektrik doo"
									layout="fill"
									objectFit="cover"
									quality={100}
									priority
									sizes="100vw"
								/>
							</div>
						)}

						{banner.button && (
							<Carousel.Caption className={`${classes['custom-caption']}`}>
								<Link href="/">
									<a variant="danger" className={`${classes['button-caption']}`}>
										{banner.button}
									</a>
								</Link>
							</Carousel.Caption>
						)}
					</Carousel.Item>
				))}
			</Carousel>
		</div>

		<div className="desktop-hidden">
			<Carousel>
				{(mobileBanners ?? []).map((banner) => (
					<Carousel.Item className={`${classes['main-slider']}`} key={banner.id}>
						{banner.url ? (
							<Link href={banner.url} target="_blank">
								<a>
									<div className={classes['mobile-display']}>
										<Image
											className={classes['mobile-display']}
											src={banner.image}
											alt="Stojic Elektrik doo"
											layout="fill"
											objectFit="cover"
											priority
											sizes="100vw"
										/>
									</div>
								</a>
							</Link>
						) : (
							<div className={classes['mobile-display']}>
								<Image
									className={classes['mobile-display']}
									src={banner.image}
									alt="Stojic Elektrik doo"
									layout="fill"
									objectFit="cover"
									priority
									sizes="100vw"
								/>
							</div>
						)}

						{banner.button && (
							<Carousel.Caption className={`${classes['custom-caption']}`}>
								<Link href="/">
									<a variant="danger" className={`${classes['button-caption']}`}>
										{banner.button}
									</a>
								</Link>
							</Carousel.Caption>
						)}
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	</>
);

export default MainSlider;
