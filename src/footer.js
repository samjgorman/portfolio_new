import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './footer.css';


const Social = ({image,link}) => {
    return(
    <a className = "link" href= {link} target="_blank"> 
        <div className = "icon-wrapper"> 
            <i class={image}></i>
        </div>
    </a>
    )
}

const Footer = ( {title, color} ) => {
  return(

    <div className = "footer-wrapper"> 
        <div className = "footer-section-wrapper">
            <div className = "section-one"> 
                <div className = "section-one-title">Thanks for saying hi!</div>
                <Social image = "fab fa-dribbble"
                link = "https://dribbble.com/samjgorman"/>
                <Social image = "fab fa-medium-m"
                link = "https://medium.com/@gormansam"/>
                <Social image = "fab fa-linkedin-in"
                link = "https://www.linkedin.com/in/gormansam/"/>
            </div>


            <div className = "section-two"> 
                <div className = "section-two-title">Case studies:</div>
                    <div className = "section-two-study" >🇫🇷   Product design with <b>RandomCoffee </b></div>
                    <div className = "section-two-study">🤖   Front-end dev with <b> Peerlift </b></div>
                    <div className = "section-two-study">🎨   UI design with <b> Peerlift </b></div>
            </div>

        </div>
        <div className = "footer-text">Designed + coded by Sam with ❤️ in React</div>
    </div>
  
  )
}

export default Footer;