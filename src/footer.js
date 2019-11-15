import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './footer.css';
import Social from "./components/social";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from "./images/resume.pdf"


const Contact = styled.div`
  margin-bottom: 0.5em;
`;


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
                <Contact> 📬 Sgorman at stanford.edu</Contact>
                <a href = {Resume} target = "_blank">📝 Résumé</a>


            </div>


            <div className = "section-two"> 
                <div className = "section-two-title">Case studies:</div>
                    <div className = "section-two-study" >🇫🇷   <Link className = "footerLink" to = "/random"> Product design with <b>RandomCoffee </b> </Link></div>
                    <div className = "section-two-study">🤖   <Link className = "footerLink"to = "/connect"> Full stack with <b> Peerlift </b> </Link></div>
                    <div className = "section-two-study">💸   <Link className = "footerLink" to = "/case"> UI design with <b> Microscholarships </b></Link> </div>
                    <div className = "section-two-study">🎨   <Link className = "footerLink" to = "/figma-kp"> More UI design with <b> Figma Plugins </b></Link> </div>

            </div>

        </div>
        <div className = "footer-text">Built by Sam with ❤️ in React</div>
    </div>
  
  )
}

export default Footer;