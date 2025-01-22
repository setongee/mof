import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import '../../styles/card__ui.scss'
import { ArrowUpRight, Cellar, City, Hospital } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

// icons
import agency from '../../assets/MDA/agency.svg'
import dept from '../../assets/MDA/department.svg'
import units from '../../assets/MDA/ministry.svg'
import { getAdminData } from '../../api/core/admin'

export default function Agencies() {

const[data, setData] = useState({})

useEffect(() => {

getAdminData("mof")
.then( res =>{

    refixArr(res[0].agencies)

} )

}, []); 

const refixArr = (q) => {

    const newObj = {};

    q.forEach(e => {
        
        if(!newObj[e.category]){

            newObj[e.category] = { name : e.category, data : [] }

        }

        newObj[e.category].data.push(e)

    });

    setData(newObj);

}

// const refixArr = (q) => {

//     const result = Object.groupBy(q, ( { category } ) => category);
//     setData(result)

// }

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
            
                {
                    Object.entries(data).map( (e, index) => (

                        <section id={ e[0] === "department" ? "directorates" : e[0] } className = "multi" key = {index}>

                            <h1> {e[0]} </h1>

                            <div className="mda__card__ui flex gap__20">

                                {
                                    e[1].data.map( (res, index) => (

                                        <div className="mda__card" key = {index}>

                                            <div className="iconHolder">

                                                <div className="card__photo">
                                                    <img src = {dept} />
                                                </div>

                                            </div>

                                            <div className="card__content">

                                            <p>{res.name}</p>
                                            <span> <Cellar/> {e[0]} </span>
                                                
                                            </div>

                                        </div>
                                    ) )
                                }

                            </div>

                        </section>

                     ) )
                }
              
          </div>

        </Container>

        <Footer/>

    </div>
  )
}
