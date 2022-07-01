import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { Helmet } from 'react-helmet'
import { t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import banner from '../../assets/images/cy-swap-img/BG_Banner.png'
import card from '../../assets/images/cy-swap-img/card-img.png'
import coin from '../../assets/images/cy-swap-img/coin.png'
import btn from '../../assets/images/cy-swap-img/btn.png'
import btc from '../../assets/images/cy-swap-img/btc.png'
import eth from '../../assets/images/cy-swap-img/eth.png'
import usdt from '../../assets/images/cy-swap-img/tether-usdt.png'
import bsc from '../../assets/images/cy-swap-img/bsc.png'
import circle from '../../assets/images/cy-swap-img/circle-rotate.png'
import busd from 'https://bscscan.com/token/images/busd_32.png'
import { Link } from 'react-router-dom'


export default function Home() {
    const { i18n } = useLingui()

    return (
        <>
            <section className="banner-main-sec">
                <div className='row'>
                    <div className='col-md-12'>
                        <div>
                            <h2>Best Crypto Swap For You</h2>
                            <p>Easily Swap, Trade & Earn digital assets on the leading decentralized crypto trading protocol.</p>
                            <div>
                                <Link
                                    to="/swap" className='common-btn'>Enter App</Link>
                                {/* <a href="" className='border-btn'>Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="sec-banner-box">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-6'>
                            <div className='box-banner-new'>
                                <h3>$6.66</h3>
                                <p>CyCoin Price</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6'>
                            <div className='box-banner-new'>
                                <h3>$1.97b</h3>
                                <p>Total Liquidity</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6'>
                            <div className='box-banner-new'>
                                <h3>$220.93b</h3>
                                <p>Total Volume</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6'>
                            <div className='box-banner-new'>
                                <h3>10</h3>
                                <p>Total Pairs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-swap-box">
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 offset-lg-1 col-md-6'>
                            <div>
                                <h2 className="common-heading">Quest3 Protocol</h2>
                                <p className="commonpera">The CyCoin Swap Protocol is a public entity owned and governed by all-inclusive CyCoin holders. Designed with simplicity, speed, affordability and security in mind, CyCoin SWAP allows users to diversify market offerings & make increasing gains. </p>
                            </div>
                        </div>
                        <div className='col-lg-5 text-center col-md-6'>
                            <img className='m-auto' src={circle} />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="about-swap-box">
              <div className='container'>
                 <div className='row align-items-center'>
                    <div className='col-lg-5 order-2 col-md-6'>
                        <div>
                            <h2 className="common-heading">Explore Emerging Networks of Defi Apps</h2>
                            <p className="commonpera">Quest3 is a decentralized platform which is open & accessible for all including developers, traders, investors & liquidity providers. They can together participate, swap their tokens, add liquidity to existing pools in the platform and can have exciting opportunities.</p>
                            {/* <div className="mt-3">
                                <Link className="common-btn" to="/swap">Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className='col-lg-5 offset-lg-1 col-md-6'>
                    <img src={card} />
                    </div>
                 </div>
               </div>
            </section>


            <section className="about-swap-box pb-0">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div>
                                <h2 className="common-heading">Best Popular Crypto Pairs <br /> On Quest3</h2>
                                <p className="commonpera mb-5">Choose your favorite crypto pairs & start trading today!</p>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/binance_32.png" />
                                    <div>
                                        <h5>Binance</h5>
                                        <p>BNB</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={eth} />
                                    <div>
                                        <h5>Ethereum</h5>
                                        <p>ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/binance_32.png" />
                                    <div>
                                        <h5>Binance</h5>
                                        <p>BNB</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={btc} />
                                    <div>
                                        <h5>Bitcoin</h5>
                                        <p>BTC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <div className="first-box-new">
                                        <img src="https://bscscan.com/token/images/binance_32.png" />
                                        <div>
                                            <h5>Binance</h5>
                                            <p>BNB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/busd_32.png" />
                                    <div>
                                        <h5>Binance USD</h5>
                                        <p>BUSD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/binance_32.png" />
                                    <div>
                                        <h5>Binance</h5>
                                        <p>BNB</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <div className="first-box-new">
                                        <img src={usdt} />
                                        <div>
                                            <h5>Tether</h5>
                                            <p>USDT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/busd_32.png" />
                                    <div>
                                        <h5>Binance USD</h5>
                                        <p>BUSD</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={btc} />
                                    <div>
                                        <h5>Bitcoin</h5>
                                        <p>BTC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/busd_32.png" />
                                    <div>
                                        <h5>Binance USD</h5>
                                        <p>BUSD</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={usdt} />
                                    <div>
                                        <h5>Tether</h5>
                                        <p>USDT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src="https://bscscan.com/token/images/busd_32.png" />
                                    <div>
                                        <h5>Binance USD</h5>
                                        <p>BUSD</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={eth} />
                                    <div>
                                        <h5>Ethereum</h5>
                                        <p>ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src={btc} />
                                    <div>
                                        <h5>Bitcoin</h5>
                                        <p>BTC</p>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={usdt} />
                                    <div>
                                        <h5>Tether</h5>
                                        <p>USDT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src={eth} />
                                    <div>
                                        <div>
                                            <h5>Ethereum</h5>
                                            <p>ETH</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                    <img src={usdt} />
                                    <div>
                                        <h5>Tether</h5>
                                        <p>USDT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="conversion-chang">
                                <div className="first-box-new">
                                    <img src={eth} />
                                    <div>
                                        <div>
                                            <h5>Ethereum</h5>
                                            <p>ETH</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="first-box-new">
                                    <img src={btn} />
                                </div>
                                <div className="first-box-new">
                                <img src={btc} />
                                    <div>
                                        <h5>Bitcoin</h5>
                                        <p>BTC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-swap-box">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div>
                                <h2 className="common-heading">How to Use Quest3?</h2>
                                <p className="commonpera">Swapping is a simple process exchanging one token for another. Prices of the asset depend on the supply and demand of the assets, which is community driven. Though there are some factors like slippage and price impact that can affect your trade, hence we also provide extra features for you to control your trades. Get started with Quest3 in 4 simple steps-</p>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <div className="pickone-box">
                                <span>01</span>
                                {/* <h4>Connect Wallet</h4> */}
                                <br></br>
                                <p>Connect to Quest3 using a wallet like Metamask.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="pickone-box">
                                <span>02</span>
                                <br></br>
                                {/* <h4></h4> */}
                                <p>Choose the Crypto pair from the given options</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="pickone-box">
                                <span>03</span>
                                <br></br>
                                {/* <h4>Send the Deposit</h4> */}
                                <p>Click “Swap” and you’re done!</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className="pickone-box">
                                <span>04</span>
                                <br></br>
                                {/* <h4>Receive Funds</h4> */}
                                <p>Wait for the transaction to complete and see your new tokens automatically appear in your wallet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="w-100 footer-main">
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 m-auto">
                            <p className="copyright-line">© 2022 <b>CyCoin</b>. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>





        </>
    )
}
