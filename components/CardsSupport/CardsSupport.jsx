import classes from './CardsSupport.module.scss';
import cards from '../../data/cardsSupport.json';
import { Row, Col } from 'react-bootstrap';

const CardsSupport = () => {
  return (
    <div className={`${classes['cardsSupport']}`}>
      <div className="container">
        <Row>
          {cards.map((card, i) => {
            return (
              <Col key={card.id} xs={3} sm={3} md={3} lg={3} xl={3} >
                <div className={i === 2 || i === 3 ? `${classes['cardSupport']} ${classes['cardSupportMob']}` : `${classes['cardSupport']}`} >
                  <img src={card.src} alt={card.alt} />

                  <p>
                    <span>{card.span}</span>
                    {card.desc}
                  </p>
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
