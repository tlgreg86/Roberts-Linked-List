import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.article`
  background-color: #f2f4f4;
  border: 1px solid #607d8b;
  margin-bottom: 15px;
  min-height: 140px;
  width: 100%;
`;

const CardHeader = styled.h1`
  color: #455A64;
  font-family: Open Sans, Extra-Bold 800, Regular 400;
`;

const CardUrl = styled.a`
  color: #6O7D8B;
  height: 50px;
`;

const Card = ({ data }) => {
  return <CardWrapper>
      <CardHeader>{data.title}</CardHeader>
      <CardUrl href={data.url}>{data.url}</CardUrl>
    </CardWrapper>;
};

export default Card;