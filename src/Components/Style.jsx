
import React from 'react';
import './Style.css'
import 'flip-card-wc';

const FrontOfCard = ({ children }) => (
  <div
    className="card"
    style={{
      backgroundColor: 'linear-gradient(45deg, #f6f8fa, #f6f8fa)',
      height: '100%',
    }}
  >
    <p>{children}</p>
  </div>
);

const BackOfCard = ({ children }) => (
  <div
    className="card"
    style={{
      backgroundColor: 'linear-gradient(45deg, #f6f8fa, #f6f8fa)',
      height: '100%',
    }}
  >
    <p>{children}</p>
  </div>
);

const FlipCard = ({ variant = 'hover', frontOfCard, backOfCard }) => {
  return (
    <flip-card variant={variant} style={{ height: '100%' , width: '100%' }}>
      <div slot="front">{frontOfCard}</div>
      <div slot="back">{backOfCard}</div>
    </flip-card>
  );
};

const Cards = () => {
  return (
    <div className='textt'>
      <h3>Flipping Cards</h3>
    <div className="flip-card-inner">
    
      <FlipCard
        frontOfCard={
          <FrontOfCard>
            <div className="flip-card-front">
              <img src="http://localhost:3000/static/media/Frame%2019.0290bb5a48c48e1b374a.png" />{' '}
              
        
            </div>
          </FrontOfCard>
        }
        backOfCard={
          <BackOfCard>
            <div className="flip-card-back">

              <h3>Store Auditing</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?</p>
             
             
            </div>
          </BackOfCard>
        }
      />
      <FlipCard
        frontOfCard={
          <FrontOfCard>
            <div className="flip-card-front">
              <img src="http://localhost:3000/static/media/shelf%20monitoring.5f5b219f82747fafe222.png" />{' '}
              
            </div>
          </FrontOfCard>
        }
        backOfCard={
          <BackOfCard>
            <div className="flip-card-back">
            <h3>Store Monitoring</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?</p>
            </div>
          </BackOfCard>
        }
      />
      </div>
    </div>
  );
};

export default Cards;
