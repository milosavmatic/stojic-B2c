import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/legacy/image';
import classes from './ActionBanners.module.scss';

const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));

const ActionBanners = ({ actionBanners }) => (
	<div className={`${classes.actionBanners}`}>
		<div className="container">
			<Row>
				{(actionBanners ?? []).map((banner) => (
					<Col className={`${classes.box}`} key={banner.id} sm={12} md={6} lg={6} xl={6}>
						<Link href="/" legacyBehavior>
							<div className={`${classes.actionBanner}`}>
								<Image src={banner.image} alt="Stojic Elektik" layout="fill" />
								{/* <div className={classes.wrappText}>
                      <h5>{banner.title}</h5>
                      <p>Saznaj više &#62;&#62;</p>
                    </div> */}
							</div>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	</div>
);

export default ActionBanners;
