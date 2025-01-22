import React, {useState, useEffect} from 'react'
import './about.scss'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/footerArea'
import { getAdminData } from '../../api/core/admin'

export default function Vision() {

  const[data, setData] = useState({})

  useEffect(() => {

    getAdminData("mof")
    .then( res => setData(res[0]) )

  }, []);

  console.log(data)

  return (

    <div className="about">

      <Container>

        <div className="topp flex">

          <div className="title" style={{border : 'none'}}>

            <h1>Vision, Mission, and Goals: Defining Purpose, Direction, and Key Objectives</h1>

            <span>Aligning Identity, Purpose, Direction, and Objectives for Sustainable Growth and Success</span>

          </div>

          <div className="picx pic1"><img src="/src/assets/photos/ministry-of-finance-landing-page.jpeg" alt="" /></div>
          <div className="picx pic1"><img src="/src/assets/photos/MR-ABAYOMI-COM-OF-FINANCE-728x1024.jpeg" alt="" /></div>

        </div>

        <div className="aims">
          
          <div className="aim">
            <div className="h">
              Vision Statement
            </div>
            <p> {data?.vision} </p>
          </div>

          <div className="aim">
            <div className="h">
              Mission Statement
            </div>
            <p> {data?.mission} </p>
          </div>

        </div>

      </Container>

      <Footer/>

    </div>
  )
}
