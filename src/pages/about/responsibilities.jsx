import React from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import Footer from '../../components/footer/footerArea'

export default function Responsibilities() {

  return (
    
        <div className="about__sections">

            <Container>

                <div className="topp flex">

                    <div className="title" style={{border : 'none'}}>

                        <h1>Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles</h1>

                        <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>

                    </div>

                    <div className="picx pic1"><img src="/src/assets/photos/ministry-of-finance-landing-page.jpeg" alt="" /></div>
                    <div className="picx pic1"><img src="/src/assets/photos/MR-ABAYOMI-COM-OF-FINANCE-728x1024.jpeg" alt="" /></div>

                </div>
                
                <div className="holder">

                    <div className="mda__head">
                        <div className="mda__info">
                            <div className="lead">Responsibilities of the Ministry of Finance</div>

                            <div className="backups">The Ministry of Finance is a unique Agency that provides the financial backbone that helps government translate its vision of providing the dividends of democracy to the teeming population of Lagos State.

</div>
                        </div>
                    </div>

                    <div className="mda__content">
                        <p>1. Formulate and evaluate policies relating to Finance.</p>

                        <p>2. Coordination of all revenue Consultants.</p>

                        <p>3. Responsible for Lagos State Mortgage Scheme.</p>

                        <p>4. Advising on general financial and monetary matters.</p>
                        
                        <p>5. Developing the plans and programmes needed to achieve the designed objectives by all revenue collecting Agencies.</p>

                        <p>6. Coordination of all World Bank and other Multilateral Funds and Projects in conjunction with Ministry of Economic Planning & Budget.</p>

                        <p>7. Responsibilities for matters relating to the State Consultancy Board.</p>

                        <p>8. Establish and maintain relationships with international and local financial institutions, creditors and institutional investors in Government debts.</p>

                        <p>9. Maintain a reliable database of all instruments issued, loans taken or guaranteed by the Government or any of its Agencies and all contingent liabilities related to it.</p>

                        <p>10. Verify and service debts guaranteed or taken directly by the Government.</p>

                    </div>
                    
                </div>

                {/* <div className="otherLinks">
                    <p>See also : </p>
                    <div className="links__quick">
                        <span> Vision, Mission & Structure </span>
                    </div>
                </div> */}
            </Container>

            <Footer/>
        </div>

  )

}
