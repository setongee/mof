import React from 'react'
import Container from '../../components/container/Container'
import '../../styles/card__ui.scss'
import { ArrowUpRight, Cellar, City, Hospital } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

// icons
import agency from '../../assets/MDA/agency.svg'
import dept from '../../assets/MDA/department.svg'
import units from '../../assets/MDA/ministry.svg'

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

            <div id="agency">

              <section id="directorates" className = "multi" >

                  <h1>Agencies</h1>

                  <div className="mda__card__ui flex gap__20">

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {units} />
                              </div>

                          </div>

                          <div className="card__content">
                              <p> Lagos State Science Research and Innovation Council (LASRIC) </p>
                              <span> <Cellar/> Agency</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {units} />
                              </div>

                          </div>

                          <div className="card__content">
                              <p> Cyber Security Advisory Council </p>
                              <span> <Cellar/> Agency </span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {units} />
                              </div>

                          </div>

                          <div className="card__content">
                              <p> Lagos State Residents Registration Agency (LASRRA) </p>
                              <span> <Cellar/> Agency</span>
                          </div>

                      </div>

                  </div>

              </section>

              <section id="directorates" className = "multi" >

                  <h1>Departments</h1>

                  <div className="mda__card__ui flex gap__20">

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {dept} />
                              </div>

                          </div>

                          <div className="card__content">
                              <p>Administration and Human Resources [A & HR]</p>
                              <span> <Cellar/> Departments</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {dept} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Finance and {<br></br>} Accounts [F & A]</p>
                          <span> <Cellar/> Directorates</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {dept} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p> Information Communication Technology[ICT]</p>
                          <span> <Cellar/> Directorates</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {dept} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Science, Policy, Programmes and Promotion[SPPP]</p>
                          <span> <Cellar/> Directorates</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {dept} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Computer Services [CS]</p>
                          <span> <Cellar/> Directorates</span>
                          </div>

                      </div>

                  </div>

              </section>

              <section id="units" className = "multi" >

                  <h1>Units</h1>

                  <div className="mda__card__ui flex gap__20">

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Public Affairs</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>The Internal Audit</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Planning</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Procurement</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Engineering</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                      <div className="mda__card">

                          <div className="iconHolder">

                              <div className="card__photo">
                                  <img src = {agency} />
                              </div>

                          </div>

                          <div className="card__content">
                          <p>Legal</p>
                          <span> <City/> Units</span>
                          </div>

                      </div>

                  </div>

              </section>
              
          </div>

        </Container>

        <Footer/>

    </div>
  )
}
