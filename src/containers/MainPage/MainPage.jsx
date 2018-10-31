import React, {Component} from 'react';
import styled from 'styled-components';

import InputSection from '../InputSection/InputSection';
import Cards from '../Cards/Cards';

const MainWrapper = styled.section`
  height: 100vh;
  display: flex;
  background-color: #cfd8dc;

  @media (max-width: 600px) {
    width: auto;
    flex-direction: column;
  }
`;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
    this.handleAddCard = this.handleAddCard.bind(this)
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("cards"))) {
      this.setState({
        cards: JSON.parse(localStorage.getItem('cards'))
      });
    }
  }

  handleAddCard(title, url) {
    this.state.cards.push({title, url})
    this.setState({
      cards: this.state.cards
    });
    localStorage.setItem('cards', JSON.stringify(this.state.cards))
  };

  render() {
    return (
      <MainWrapper>
        <InputSection handleAddCard={this.handleAddCard}/>
        <Cards cards={this.state.cards}/>
      </MainWrapper>
    )
  }
}

export default MainPage;