import React from 'react'

import { useLingui } from '@lingui/react'
import { Link } from 'react-router-dom'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
import blockchain from '../../assets/images/cy-homepage-img/Blockchain.png'
import realtime from '../../assets/images/cy-homepage-img/real time.png'
import securedata from '../../assets/images/cy-homepage-img/Sucure Data.png'
import image1 from '../../assets/images/cy-homepage-img/John.jpeg'
import image2 from '../../assets/images/cy-homepage-img/nikesh.jpg'
import image3 from '../../assets/images/cy-homepage-img/David.jpg'
import image4 from '../../assets/images/cy-homepage-img/Steve.jpg'
import image9 from '../../assets/images/cy-homepage-img/alok.png'
import image5 from '../../assets/images/cy-homepage-img/unsplash_yJpjLD3c9bU.png'
import image6 from '../../assets/images/cy-homepage-img/unsplash_9opiHRPIvR0.png'
import image7 from '../../assets/images/cy-homepage-img/unsplash_sM4r-swmcoY.png'
import image8 from '../../assets/images/cy-homepage-img/unsplash_aX1hN4uNd-I.png'
import questlogo from '../../assets/images/cy-homepage-img/Quest3_logo.png'
import instagram from '../../assets/images/cy-homepage-img/Instagram.png'
import twitter from '../../assets/images/cy-homepage-img/Twitter.png'
import coinlogo from '../../assets/images/cy-homepage-img/favicon.png'
import youtube from '../../assets/images/cy-homepage-img/Youtube.png'
import discord from '../../assets/images/cy-homepage-img/Icon awesome-discord.png'
import facebook from '../../assets/images/cy-homepage-img/Icon awesome-facebook.png'
import instagram1 from '../../assets/images/cy-homepage-img/Icon awesome-instagram.png'
import linkedin from '../../assets/images/cy-homepage-img/Icon awesome-linkedin.png'
import telegram from '../../assets/images/cy-homepage-img/Icon awesome-telegram.png'
import twitter1 from '../../assets/images/cy-homepage-img/Icon awesome-twitter-square.png'
import youtube1 from '../../assets/images/cy-homepage-img/Icon awesome-youtube.png'

import { settings } from 'cluster'
import Slider from 'react-slick'

export default function HomePage() {
    const { i18n } = useLingui()

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <section className="main-banner banner-new-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h3>Welcome to the Most Advanced Blockchain Project In The Universe!</h3>
                                <p>
                                    Lead the markets with our crypto app and web wallets. Get a flawless trading
                                    experience over all platforms.
                                </p>
                            </div>
                        </div>
                        {/* <div class="col-md-6 m-auto">
                    <img src="../../assets/images/cy-homepage-img/bg-img.png" alt="Background" height="50%">
                </div> */}
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6  col-lg-4  m-auto">
                            <div className="block  ">
                                <div className="block1 ">
                                    <div className="icon text-center mb-3 mx-auto rounded-circle">
                                        <img src={blockchain} alt="" />
                                    </div>

                                    <h2 className="text-center py-1 ">Blockchain Based</h2>
                                    <p className="text-center">
                                        Invest in crypto anytime, anywhere with our safe, secure, and easy to use online
                                        platform
                                    </p>
                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="block ">
                                <div className="block1">
                                    <div className="icon text-center mb-3 mx-auto rounded-circle">
                                        <img src={realtime} alt="" />
                                    </div>
                                    <h2 className="text-center py-1">Real Time Updates</h2>
                                    <p className="text-center">
                                        We have thousands of ATMs located across the U.S. where you can easily convert
                                        cash to crypto
                                    </p>
                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 m-auto">
                            <div className="block">
                                <div className="block1">
                                    <div className="icon text-center mb-3 mx-auto rounded-circle">
                                        <img src={securedata} alt="" />
                                    </div>
                                    <h2 className="text-center py-1">Secure Data</h2>
                                    <p className="text-center">
                                        Store your growing investments in our non-custodial wallet that gives you access
                                        to a full suite of DeFi services in one place
                                    </p>
                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h4 className="text-center mb-2 ">A crypto investment platform that&nbsp;invests in you</h4>
                            <p className="text-center pt-4">
                                We invest more resources than any other platrom in making sure great support <br />
                                from real people is a click away, whenever you need it.
                            </p>
                            <div className="button-center">
                                <a href="http://3.143.163.192:3000/" className="common-btn">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="forth-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-4 m-auto">
                            <div className="block-border">
                                <div className="block2">
                                    <h2 className=" py-1">Quest3 Swap</h2>
                                    <p>
                                        We allow seamless exchange of native coins or allied cryptocurrencies users hold
                                        on the platform with their equivalent value coins or tokens from the original
                                        trading account or private key wallet.
                                    </p>

                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 m-auto">
                            <div className="block-border">
                                <div className="block2">
                                    <h2 className=" py-1">Commodity</h2>
                                    <p>
                                        Commodity trading industry is hailing application of Blockchain technology as
                                        panacea that has unimaginably altered the way commodity-trading industry has
                                        operated since decades
                                    </p>

                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 m-auto">
                            <div className="block-border">
                                <div className="block2">
                                    <h2 className=" py-1">Quest Wallet</h2>
                                    <p>
                                        Easy, safe and secured transfers with a unique Trading Portal from Quest3. We
                                        have a strong security system and ensure your account will remain secure
                                    </p>

                                    {/* <a className="learn-more">Learn More <i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifth-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <p className=" for-main text-white text-left  before position-relative">How?</p>
                            <h1 className="text-left">
                                The Process We Use to
                                <br />
                                experience better
                            </h1>
                            <p />
                        </div>
                        <div className="col-md-6 col-lg-3 m-auto">
                            <div className="steps">
                                <div className="blok">
                                    <h2 className=" py-1">Step 01</h2>
                                    <p>Create Account on Quest3 Wallet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 m-auto">
                            <div className="steps for-2">
                                <div className="blok">
                                    <h2 className=" py-1">Step 02</h2>
                                    <p>Get Some BTC on your Quest3 wallet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 m-auto">
                            <div className="steps for-3">
                                <div className="blok">
                                    <h2 className=" py-1">Step 03</h2>
                                    <p>Transfer BTC to other wallet by Email and wallet address</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 m-auto">
                            <div className="steps for-4">
                                <div className="blok">
                                    <h2 className=" py-1">Step 04</h2>
                                    <p>User can check your transaction anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sixth-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <p className=" for-main text-white text-left  before position-relative">Team</p>
                            <h1 className="text-left">Our Team Members</h1>
                            <p className="">
                                Quest3 success is to be attributed to the mutual trust, respect and collaboration of
                                every individual who is a part of the Quest3 Global family. Like Henry Ford said: Coming
                                together is a beginning. Keeping together is progress. Working together is success.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <div className="trainers">
                                <div className="card-img">
                                    <img className="robotImage" src={image1} alt="" />
                                </div>
                                <div className="card-text text-center">
                                    <h4 className="py-3 m-0">John Sajadi</h4>
                                    <p className="text-white team-para">Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trainers">
                                <div className="card-img">
                                    <img className="robotImage" src={image2} alt="" />
                                </div>
                                <div className="card-text text-center">
                                    <h4 className="py-3 m-0">Nikesh Lalchandani</h4>
                                    <p className="text-white team-para">IT & Finance Head</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trainers">
                                <div className="card-img">
                                    <img className="robotImage" src={image3} alt="" />
                                </div>
                                <div className="card-text text-center">
                                    <h4 className="py-3 m-0">David Evans</h4>
                                    <p className="text-white team-para">Director-Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trainers">
                                <div className="card-img">
                                    <img className="robotImage" src={image4} alt="" />
                                    {/* <div class="overlay">
                                <a href="#" class="icon" title="User Profile">
                                  <img src="../../assets/images/cy-homepage-img/Facebook.png" alt="">
                                </a>
                                <a href="#" class="icon" title="User Profile">
                                    <img src="../../assets/images/cy-homepage-img/Instagram.png" alt="">
                                  </a>
                                  <a href="#" class="icon" title="User Profile">
                                    <img src="../../assets/images/cy-homepage-img/Linkedin.png" alt="">
                                  </a>
                                  <a href="#" class="icon" title="User Profile">
                                    <img src="../../assets/images/cy-homepage-img/Youtube.png" alt="">
                                  </a>
                              </div> */}
                                </div>
                                <div className="card-text text-center">
                                    <h4 className="py-3 m-0">Steve Dew</h4>
                                    <p className="text-white team-para">Karbun Commercial Operations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trainers">
                                <div className="card-img">
                                    <img className="robotImage" src={image9} alt="" />
                                </div>
                                <div className="card-text text-center">
                                    <h4 className="py-3 m-0">Alok Agrawal</h4>
                                    <p className="text-white team-para">CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="seventh-section">
        <div className="container">
          <div className="row align-items-center">
            <div>
              <p className=" for-main text-white text-left  before position-relative">Roadmap</p>
              <h1 className="text-left">Roadmap</h1>
            </div>
            <div className="row align-item-bottom">
              <div className="col-md-12">
                <Slider className="new-slider-timeline" {...settings}>


                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div><div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam euismod luctus. </p>

                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section> */}
            {/* <section className="eigth-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="custom-w-60">
                <p className=" for-main text-white text-left  before position-relative">Blogs</p>
                <h1 className="text-left">Latest Blogs</h1>
                <p className='for-max-wid'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh nec diam<br /> euismod luctus. Aenean blandit ante lobortis neque elementum, sit amet<br /> euismod metus varius.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 m-auto">
              <div className="block-border1">
                <div className="block21">
                  <img className="max-box" src={image5} alt="" />
                  <h2 className=" py-1">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 m-auto">
              <div className="block-border1">
                <div className="block21">
                  <img className="max-box" src={image6} alt="" />
                  <h2 className=" py-1">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 m-auto">
              <div className="block-border1">
                <div className="block21">
                  <img className="max-box" src={image7} alt="" />
                  <h2 className=" py-1">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 m-auto">
              <div className="block-border1">
                <div className="block21">
                  <img className="max-box" src={image8} alt="" />
                  <h2 className=" py-1">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

            <section className="newsletter pb-5 pt-13 w-100 " id="navigate-id-10">
                <div className="container">
                    <div className="row px-5 align-items-center m-1 py-4 desktop-view">
                        <div className="col-lg-8">
                            <div className="subscribe-wrapper subscribe2-wrapper ">
                                <div className="subscribe-text ">
                                    <h2 className="text-white">
                                        Get In Touch With
                                        <span> Quest3</span>
                                    </h2>
                                </div>
                                <div className="subscribe-form pt-4">
                                    <div className="position-relative w-100">
                                        <input
                                            className="form-control buynow_form-text"
                                            placeholder="Enter Your Email Here"
                                            type="email"
                                            // value={newsLetter}
                                            // onChange={(e) => setNewsLetter(e.target.value)}
                                        />
                                        <button className="common-btn">Contact Us</button>
                                    </div>
                                </div>
                                <div className="for-link-sec pt-3">
                                    <a href="https://twitter.com/Cycoin3" target="_blank" rel="noopener noreferrer">
                                        <img style={{ margin: '4px' }} src={twitter1} />
                                    </a>
                                    <a
                                        href="https://instagram.com/cycoinofficial?igshid=YmMyMTA2M2Y="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img style={{ margin: '4px' }} src={instagram1} />
                                    </a>
                                    <a
                                        href="https://discord.com/channels/978286839393845258/978286839901339720"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img style={{ margin: '4px' }} src={discord} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/cycoinofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img style={{ margin: '4px' }} src={linkedin} />
                                    </a>
                                    <a
                                        href="https://t.me/cycoinofficialcommunity"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img style={{ margin: '4px' }} src={telegram} />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UCG7Oa33hr_ILlV8IxkKkybw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={youtube1} height="26px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img src={coinlogo} alt="" className="w-100 newsletterimage" />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-new pt-5 pb-3">
                <div className="footer pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="infotext">
                                    <img className="image-logo-header" src={questlogo} alt="logo" />
                                    <p></p>
                                    <p>
                                        Lead the markets with our crypto app and web wallets. Get a flawless trading
                                        experience over all platforms.x
                                    </p>
                                </div>
                            </div>
                            <div className="menutext col-md">
                                <h3 className="pb-3">Quick Links</h3>
                                <ul className="p-0 list-unstyled">
                                    <li>
                                        <a>Roadmap</a>
                                    </li>
                                    <li>
                                        <a>Team</a>
                                    </li>
                                    <li>
                                        <a>How?</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="list col-md footer-links">
                                <h3 className="pb-3">Resources</h3>
                                <ul className="p-0 list-unstyled">
                                    <li className="nav-item">
                                        <a href="#navigate-id-5">About Us</a>
                                    </li>
                                    <li>
                                        <a>Contact Us</a>
                                    </li>
                                    <li>
                                        <a>Help Center</a>
                                    </li>
                                    <li>
                                        <a>Blogs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="formfill col-md">
                                <h3 className="pb-3">Stay up to date</h3>
                                <p>Stay updated with Quest3 news, zero spam, we promise.</p>
                                {/* <div class="subscribe-form">
                  <h3 class="pb-3">Subscribe</h3>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email Address"
                    required
                    class="form-control subscribe_form-text"
                   
                  />
                  <button
                    type="submit"
                    class="fa fa-telegram subbtn"></button>
                </div > */}
                                <div className="social_icon pt-3">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <img src={instagram} />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <img src={twitter} />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <img src={youtube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-sm-6">
                                <div className="copyright ">
                                    © 2022 <span>Quest3.</span> All rights reserved
                                </div>
                            </div>
                            <div className="col-sm-6 ">
                                <h6 className="text-rigt text-white">
                                    <a href="/">Terms &amp; Conditions | </a>
                                    <a href="/">Privacy Policy</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
