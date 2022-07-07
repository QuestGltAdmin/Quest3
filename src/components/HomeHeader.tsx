import { ChainId, Currency } from 'quest-quest3-sdk'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../assets/images/Quest3_green.png'
import { ExternalLink, NavLink } from './Link'


function HomeHeader(): JSX.Element {


    return (
        

         <header className="homepage-header position-fixed">
         <div className="container">
           <div className="row">
             <div className="col-md-12">
               <nav className="navbar navbar-expand-lg navbar-dark">
                 <div className="navbar-brand justify-content-center"> 
                   <a href="#"><img className="image-logo-header" src={Logo} width="100%" /></a>
                 </div>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"><i className="fa fa-bars" /></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                   <ul className="navbar-nav mx-auto">
                     <li className="nav-item">
                       <a className="nav-link" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">OTC desk</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Commodities</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Pharmaceuticals</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Green Swaps</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Incubator</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">NFT</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">Sovereign Coins</a>
                     </li>
                   </ul>
                   <div className="navbtn align-items-center d-lg-block" style={{marginRight: '5px'}}>
                     <div className="d-flex align-items-center">
                       <a className="d-inline-block green text-white" >Login</a>
                     </div>
                   </div>
                   <div className="navbtn align-items-center d-lg-block">
                     <div className="d-flex align-items-center">
                       <a className="d-inline-block green text-white">Buy Now</a>
                     </div>
                   </div>
                 </div>
               </nav>
             </div>
           </div>
         </div>
       </header>
        
        )
}

export default HomeHeader
