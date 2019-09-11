import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`

`;

const CaseQuote = styled.div`
    font-weight: bold;
    font-family: Overpass;
    font-size: 18px;
    color: #5f5f5f;

    margin-left: 20%;
    margin-right: 20%;
    margin-top: 4em;
    margin-bottom: 4em;
    font-style: italic;
    line-height: 1.85;

    border-left-style: solid;
    border-left-color: ${props => props.color};
    border-left-width: 10px;

    padding-left: 1em;

    @media (max-width: 800px) {
       margin-left: 7vw;
       margin-right: 7vw;
        
      }`;

const Block = styled.div`

`;

const Quote = ( {text, color} ) => {
  return(
    <Wrapper>
    <Block color = {color}> </Block>
    <CaseQuote color = {color}> {text} </CaseQuote>
    </Wrapper>
  )
}

export default Quote;

