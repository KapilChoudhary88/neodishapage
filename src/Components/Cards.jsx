import React from 'react';
import './Style.css'
import 'flip-card-wc';

const FrontOfCard = ({ children }) => (
  <div
    className="card"
    style={{
      backgroundColor: 'linear-gradient(45deg, #6f04d9, #d904be)',
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
      backgroundColor: 'linear-gradient(45deg, #6f04d9, #d904be)',
      height: '100%',
    }}
  >
    <p>{children}</p>
  </div>
);

const FlipCard = ({ variant = 'hover', frontOfCard, backOfCard }) => {
  return (
    <flip-card variant={variant} style={{ height: '100%' }}>
      <div slot="front">{frontOfCard}</div>
      <div slot="back">{backOfCard}</div>
    </flip-card>
  );
};

const Cards = () => {
  return (
    <div className="flip-card-inner">
      <FlipCard
        frontOfCard={
          <FrontOfCard>
            <div className="flip-card-front">
              <img src="https://img.freepik.com/premium-vector/mobile-smartphone-phone-mockup-isolated-white-background-with-blank-screen_88272-1105.jpg?w=740" />{' '}
              
              <h1>front page</h1>
            </div>
          </FrontOfCard>
        }
        backOfCard={
          <BackOfCard>
            <div className="flip-card-back">

              <h3>Page 1</h3>
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
              <img src="https://img.freepik.com/premium-vector/mobile-smartphone-phone-mockup-isolated-white-background-with-blank-screen_88272-1105.jpg?w=740" />{' '}
              <h3>front</h3>
              <h1>front page</h1>
            </div>
          </FrontOfCard>
        }
        backOfCard={
          <BackOfCard>
            <div className="flip-card-back">
            <h3>Page 2</h3>
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
              <img src="https://img.freepik.com/premium-vector/mobile-smartphone-phone-mockup-isolated-white-background-with-blank-screen_88272-1105.jpg?w=740" />{' '}
              <h3>front</h3>
              <h1>front page</h1>
            </div>
          </FrontOfCard>
        }
        backOfCard={
          <BackOfCard>
            <div className="flip-card-back">
            <h3>Page 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et unde quia animi amet veniam?</p>
            </div>
          </BackOfCard>
        }
      />
    </div>
  );
};

export default Cards;
