import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';

const CardsWrapper = styled.section`
  width: 50%;
  padding: 15px 15px 0 15px;
  // background-color: #cfd8dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  @media (max-width: 600px) {
    width: auto;
  }
`;

const Cards = ({ cards }) => {
  return (
    <CardsWrapper>
      {cards.map(card => {
        return <Card data={card}/>
      })}
    </CardsWrapper>
  );
}

export default Cards;