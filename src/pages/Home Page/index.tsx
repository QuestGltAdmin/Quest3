import React from 'react'

import { useLingui } from '@lingui/react'
import { Link } from 'react-router-dom'


export default function HomePage() {
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

            <footer className="w-100 footer-main">
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 m-auto">
                            <p className="copyright-line">© 2022 <b>Quest3Coin</b>. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
