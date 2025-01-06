import React from 'react'
import Container from '../../components/container/Container'
import '../../styles/card__ui.scss'
import { ArrowUpRight, Cellar, City, Hospital } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

export default function Agencies() {
  return (
    <div className="about__sections">

        <Container>

          <div className="topp flex">

                <div className="title" style={{border : 'none'}}>

                    <h1>Agencies, Directorates, and Units: Exploring Structure, Roles, and Responsibilities</h1>

                    <span>Understanding Organizational Divisions and Their Roles in Effective Operations and Governance</span>

                </div>

                <div className="picx pic1"><img src="/src/assets/photos/ministry-of-finance-landing-page.jpeg" alt="" /></div>
                <div className="picx pic1"><img src="/src/assets/photos/MR-ABAYOMI-COM-OF-FINANCE-728x1024.jpeg" alt="" /></div>

            </div>

            <section id="directorates" className = "multi" >

                <h1>Departments</h1>
              
                <div className="mda__card__ui flex gap__20">

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Administration and Human Resources</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Debt Management Department</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Insurance Department</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Account Department</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Taxation and Revenue</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Research and Statistics</p>
                          <span> <Cellar/> Directorates</span>
                        </div>

                    </div>

                </div>

            </section>

            <section id="units" className = "multi" >
              
              <h1>Units</h1>
              
                <div className="mda__card__ui flex gap__20">

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Estacode and Parastatals monitoring </p>
                          <span> <City/> Units</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Public Affairs</p>
                          <span> <City/> Units</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>Audit Unit</p>
                          <span> <City/> Units</span>
                        </div>

                    </div>

                    <div className="mda__card">

                        <div className="card__photo">
                          <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                        </div>

                        <div className="card__content">
                          <p>ICT Unit</p>
                          <span> <City/> Units</span>
                        </div>

                    </div>

                </div>

            </section>

        </Container>

        <Footer/>

    </div>
  )
}
