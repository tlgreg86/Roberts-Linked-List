import React, {Component} from 'react';
import styled from 'styled-components';

const InputSectionWrapper = styled.section`
  width: 50%;
  background-color: #455A64;
`;

const Header = styled.h1`
  font-family: Roboto, sans - serif;
  color: #FFFFFF;
  font-size: 40px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 240px;
  height: 25px;
`;

const StyledButton = styled.button`
  width: 246px;
  height: 31px;
  background-color: #FFC107;

  &:hover {
    background-color: #FFD773;
  }
`;

class InputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(input, event) {
    this.setState({
      [input]: event.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddCard(this.state.title, this.state.url)
    this.setState({
      title: '',
      url: '',
    })
  }

  render() {
    return (
      <InputSectionWrapper>
        <Header>Linked<img src='/linked-list-logo.svg' height='30' alt='Linked List Logo'/>List</Header>
        <FormWrapper onSubmit={(e) => this.handleSubmit(e)}>
          <StyledInput type='text' value={this.state.title} onChange={(e) => this.handleChange('title', e)}/>
          <StyledInput type='text' value={this.state.url} onChange={(e) => this.handleChange('url', e)}/>
          <StyledButton>Enter</StyledButton>
        </FormWrapper>
      </InputSectionWrapper>
    );
  }
};

export default InputSection;