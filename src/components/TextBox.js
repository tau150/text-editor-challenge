import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  textarea {
    width: 80%;
    height: 250px;
    border: none;
  }
`;

class TextBox extends Component {
  render() {
    return (
      <StyledDiv onMouseUp={this.props.handleSelectWord}>
        <textarea
          value={this.props.typedText}
          onChange={this.props.handleTypeText}
          placeholder="Type your text here"
        />
      </StyledDiv>
    );
  }
}

export default TextBox;
