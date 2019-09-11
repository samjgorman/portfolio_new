import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './full-img.css';



const FullImage = ( {image, color} ) => {
  return(
      <img className = "full-img" src ={require(`${image}`)} /> 
  )
}

export default FullImage;

