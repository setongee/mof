import React, {useEffect} from 'react'
import './header.scss'
import Container from '../container/Container'
import logo from '../../assets/logo/lasg__logo.png'
import Button from '../button/Button'
import { useLocation } from 'react-router-dom'
import { NavArrowDown } from 'iconoir-react'
import finance from '../../assets/photos/5150.jpg'

export default function Header() {

  var location = useLocation().pathname.split('/')[1];

  useEffect(() => {

    const nav__lists = document.querySelector('.navigations');
    const active = nav__lists.querySelector('.current');

    if (active !== null){
      active.classList.remove('current');
    }else{
      console.log('sorry this url is not correct!');
    }
    
    const nav = Array.from(document.querySelectorAll('#nav'));
    const getnav = nav.filter((navigation => {
      
      var data = navigation.dataset.navigation;

      return data === location;

    }) )

    if (getnav.length){
      getnav[0].classList.add('current');
    }

  }, [location]);

  return (

    <div className="header header_type_drill flex flex__align__center font__12 text__trend ">

        <Container customClass = 'flex__combo__align__spacebtw'>

            <div className="brand_area flex flex__align__center gap__15">

              <div className="logo image__logo image__item"> 
                <img src={logo} alt="Lagos State Government Ministry, Department & Agency" /> 
              </div>

              <p className="font__12 text__trend light"> Ministry of Finance </p>

            </div>

            {/* navigations */}

            <div className="navigations flex flex__align__center gap__40 font__weight__600">

                <li id='nav' className='flex flex__align__center current' data-navigation = 'home'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/home">Home</a>
                </li>

                <li id='nav' className='flex flex__align__center pin drop' data-navigation = 'about' >

                  <a className='dark  font__12 text__trend letter__spacing__2'> <div className="main__nav">About moh</div> <div className="icon"><NavArrowDown/></div> </a>

                  <div className="dropdown flex gap__20">

                    <div className="photo__in"><img src={finance} alt="" /></div>

                    <div className="ui__list">

                      <a href='/about/vision' className="list"> 
                        <p> Vision, Mission and Structure </p>
                        <span>Get to Know who we are, What we do, our goals and our organizational Structure.</span>
                      </a>

                      <a className="list" href='/about/responsibilities'> 
                        <p> Ministerial Mandates, Responsibilities & Functions </p>
                        <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>
                      </a>

                      <a className="list" href='/about/people'> 
                        <p> Top Management Officials </p>
                        <span>Strategic leaders driving vision, growth, and organizational success.</span>
                      </a>

                      <a className="list" href='/about/agencies_directorates_units'> 
                        <p> Agencies, Directorates & Units </p>
                        <span>Get to Know who we are, What we do and our goals.</span>
                      </a>
                    </div>
                    

                  </div>

                </li>

                {/* Hospitals */}

                {/* <li id='nav' className='flex flex__align__center pin drop' data-navigation = 'hospitals' >
                  <a className='dark  font__12 text__trend letter__spacing__2'> Hospitals <div className="icon"><NavArrowDown/></div> </a>

                  <div className="dropdown flex gap__20">

                    <div className="photo__in"><img src="https://img.freepik.com/free-photo/closeup-african-american-specialist-doctor-with-stethoscope-working-medical-treatment-hospital-office-practitioner-man-analyzing-pharmaceutical-prescription-report-healthcare-service_482257-28696.jpg?t=st=1728584809~exp=1728588409~hmac=4197674e5c20fa1b54cb4778645c5ff045613dfbf30ea644fef8f7630d3dedc2&w=2000" alt="" /></div>

                    <div className="ui__list">
                      <a href='/about/vision' className="list"> 
                        <p> Tertiary Hospitals</p>
                        <span>Get to Know who we are, What we do, our goals and our organizational Structure.</span>
                      </a>

                      <a className="list" href='/about/responsibilities'> 
                        <p> Secondary Hospitals </p>
                        <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>
                      </a>

                      <a className="list"> 
                        <p> Primary Hospitals (PHC) </p>
                        <span>Strategic leaders driving vision, growth, and organizational success.</span>
                      </a>
                      
                    </div>

                  </div>

                </li> */}

                <li id='nav' className='flex flex__align__center' data-navigation = 'newsroom'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/newsroom"> Newsroom </a>
                </li>

                {/* <li id='nav' className='flex flex__align__center' data-navigation = 'resources'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/resources">Resources</a>
                </li> */}

                <li id='nav' className='flex flex__align__center' data-navigation = 'connect'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/connect">Connect</a>
                </li>

            </div>

        </Container>

    </div>

  )
}
