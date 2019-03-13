import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 5%;
  i {
    cursor: pointer;
    margin: 0 20px;
  }
`;

class StylesBar extends Component {
  render() {
    return (
      <StyledDiv>
        <i className="fas fa-bold" />
        <i className="fas fa-italic" />
        <i className="fas fa-underline" />
      </StyledDiv>
    );
  }
}

export default StylesBar;
