import classes from './ActionBanners.module.scss';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const ActionBanners = ({ actionBanners }) => {
  console.log(actionBanners);
  return (
    <div className={`${classes['actionBanners']}`}>
      <div className="container">
        <Row>
          {(actionBanners ?? []).map((banner) => {
            return (
              <Col
                className={`${classes['box']}`}
                key={banner.id}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <Link href="/">
                  <div className={`${classes['actionBanner']}`}>
                    <img src={banner.image} alt="Stojic Elektik" />
                    {/* <div className={classes.wrappText}>
                      <h5>{banner.title}</h5>
                      <p>Saznaj više &#62;&#62;</p>
                    </div> */}
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ActionBanners;
