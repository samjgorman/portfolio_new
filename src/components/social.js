import React, {Component} from 'react'; 
import styled, { css } from 'styled-components'
import './social.css';


const Social = ({image,link}) => {
    return(
    <a className = "link" href= {link} target="_blank"> 
        <div className = "icon-wrapper"> 
            <i class={image}></i>
        </div>
    </a>
    )
}

export default Social;
