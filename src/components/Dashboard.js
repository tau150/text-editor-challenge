import React, { Component } from 'react';
import styled from 'styled-components';
import StylesBar from './StylesBar';
import TextBox from './TextBox';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  hr {
    width: 80%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #eaeaea;
    margin: 3% auto
    padding: 0;
  }
  .general-container {
    width: 50%;
    border: 1px solid #eaeaea;
    border-radius: 50px;
    height: 400px;
  }
`;

class Dashboard extends Component {
  state = {
    typedText: undefined,
    propertiesByWord: {},
    selectedWord: ''
  };

  handleTypeText = e => {
    if (e.target.value === '') {
      this.setState({
        typedText: '',
        propertiesByWord: {},
        selectedWord: ''
      });
    } else {
      this.setState({
        typedText: e.target.value
      });
    }
  };

  handleSelectWord = e => {
    // console.log(window.getSelection().toString());

    //   this.setState({
    //       propertiesByWord: { ...this.state.propertiesByWord, {
    //           [window.getSelection().toString()]
    //       }}})

    this.setState({
      selectedWord: window.getSelection().toString(),
      propertiesByWord: {
        ...this.state.propertiesByWord,
        [window.getSelection().toString()]: 'test'
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <StyledDiv>
        <div className="general-container">
          <StylesBar />
          <hr />
          <TextBox
            handleTypeText={this.handleTypeText}
            typedText={this.state.typedText}
            handleSelectWord={this.handleSelectWord}
          />
        </div>
      </StyledDiv>
    );
  }
}

export default Dashboard;
