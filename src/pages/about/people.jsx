import React from 'react'
import Container from '../../components/container/Container'
import Footer from '../../components/footer/footerArea'
import '../../styles/gallery.scss'

export default function People() {

  return (
    <div className="about__sections">

        <Container>

            <div className="topp flex">

                <div className="title tt" style={{border : 'none'}}>

                    <h1>Meet the Team: Passionate People Driving Success and Innovation Forward</h1>

                    <span>Bringing Innovation, Dedication, and Excellence Together for Lasting Impact and Success</span>

                </div>

            </div>

            <div className="gallery__mda gallx">

                <section>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/02/IMG_5093.jpeg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Honourable Commissioner</span>
                            <p>Mr. Abayomi Oluyomi</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/02/5b0bf6ea-8a36-41c7-8b14-8e4449c6b856-488x470.jpeg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Special Adviser, Taxation and Revenue</span>
                            <p>Mr. Abdul-Kabir Opeyemi Ogungbo</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/05/hungg-720x470.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Permanent Secretary</span>
                            <p>Mr. Hundogan, Sewanu Temitope </p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/05/cddn-373x470.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Administration and Human Resource</span>
                            <p>Mr. Anifowoshe Olawale Jamiu</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2017/02/insurancr-640x470.png" alt="" />
                        </div>

                        <div className="name__card">
                            <span>DIRECTOR, INSURANCE</span>
                            <p>Dr. Oluwole Isaac Olugbenga</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2017/02/estacode.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>DIRECTOR, ESTACODE &PARASTATAL</span>
                            <p>Mrs. Akala Morayo Abike Folawe</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/05/IMG-20240524-WA0005.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>DIRECTOR, TAXATION & REVENUE
                            </span>
                            <p>Mr. Abayomi Nurudeen Yusuff</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://finance.lagosstate.gov.ng/wp-content/uploads/sites/102/2024/05/pl-n.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>DIRECTOR, PLANNING RESEARCH AND STATISTICS</span>
                            <p>Mrs. Bosede Medeme Seji-daniyan</p>
                        </div>

                    </a>

                    

                </section>

            </div>

        </Container>

        <Footer/>
    </div>
  )

}
