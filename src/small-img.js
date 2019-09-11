import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './small-img.css';



const SmallImage = ( {image, color} ) => {
  return(
      <img className = "small-img" src ={require(`${image}`)} /> 
  )
}

export default SmallImage;
