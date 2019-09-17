import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './footer.css';
import Social from "./components/social";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
                 <Social image = "fab fa-github"
                link = "https://github.com/samjgorman"/>
            </div>


            <div className = "section-two"> 
                <div className = "section-two-title">Case studies:</div>
                    <div className = "section-two-study" >🇫🇷   <Link className = "footerLink" to = "/random"> Product design with <b>RandomCoffee </b> </Link></div>
                    <div className = "section-two-study">🤖   <Link className = "footerLink"to = "/connect"> Full stack with <b> Peerlift </b> </Link></div>
                    <div className = "section-two-study">🎨   <Link className = "footerLink" to = "/case"> UI design with <b> Peerlift </b></Link> </div>
            </div>

        </div>
        <div className = "footer-text">Designed + coded by Sam with ❤️ in React</div>
    </div>
  
  )
}

export default Footer;