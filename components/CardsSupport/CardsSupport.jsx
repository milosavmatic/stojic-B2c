import classes from './CardsSupport.module.scss';
import cards from '../../data/cardsSupport.json';
import { Row, Col } from 'react-bootstrap';

const CardsSupport = () => {
  return (
    <div className={`${classes['cardsSupport']}`}>
      <div className="container">
        <Row>
          {cards.map((card) => {
            return (
              <Col key={card.id} sm={12} md={6} lg={6} xl={3}>
                <div className={`${classes['cardSupport']}`}>
                  <img src={card.src} alt={card.alt} />

                  <p>
                    <span>{card.span}</span>
                    {card.desc}
                  </p>
                  {/* <div className={`${classes['mobile']}`}>{card.desc}</div> */}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CardsSupport;
