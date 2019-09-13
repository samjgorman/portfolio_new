import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top: 1.5em;
margin-bottom: 1.5em;

@media (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
   }

   @media (max-width: 500px) {
    font-size: 24px;
    line-height: 1.8;
       
     }
`;

const CaseTitle = styled.div`
    font-weight: normal;
    font-family: Overpass;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 600;
    

      @media (max-width: 500px) {
      font-size: 24px;
      line-height: 1.8;
         
       }

`;

const Tag = styled.div`
color: ${props => props.color};

font-family: Oxygen;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0.5em;
`;

const Title = ( {text, color, tag} ) => {
  return(
    <Wrapper> 
        <Tag color = {color}>{tag} </Tag>
        <CaseTitle > {text} </CaseTitle>
    </Wrapper>
  )
}

export default Title;
