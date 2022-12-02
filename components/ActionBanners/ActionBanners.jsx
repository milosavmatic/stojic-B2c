import banners from '../../data/bannersAction.json';
import classes from './ActionBanners.module.scss';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const ActionBanners = () => {
  return (
    <div className={`${classes['actionBanners']}`}>
      <div className="container">
        <Row>
          {banners.map((banner) => {
            return (
              <Col
                className={`${classes['box']}`}
                key={banner.id}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <div className={`${classes['actionBanner']}`}>
                  <img src={banner.src} alt={banner.alt} />
                  <div className={classes.wrappText}>
                    <h5>{banner.title}</h5>
                    <Link href="/">Saznaj više &#62;&#62;</Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ActionBanners;
