import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import Footer from '../../components/footer/footerArea'
import { getAdminData } from '../../api/core/admin'

export default function Responsibilities() {

const[data, setData] = useState({})

useEffect(() => {

    getAdminData("mof")
    .then( res => {
        setData(res[0]);
        addContent(res[0]?.responsibilities);
    } )

}, []);

const addContent = (response) => {

    const content = document.getElementById('content');
    content.innerHTML = response;

}

console.log(data.responsibilities)

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
                        </div>
                    </div>

                    <div className="mda__content" id='content'>
                       


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
