import React from 'react'
import './resources.scss'
import Container from '../../components/container/Container'
import pdf from '../../assets/pdff.png'
import Button from '../../components/button/Button'
import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

export default function Resources() {
  return (

    <div className="resources">
       
        <Container>

            <div className="title">

                <h1>Knowledge Vault : Explore Resources & Archives</h1>

                <span>Discover a treasure trove of resources for learning, growth, and innovation.</span>

            </div>

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

                <div className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Clinical And Demographic Characteristics of COVID19 Patients in Lagos, Nigeria
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date">Mon, 15th January 2024</div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </div>

            </div>

        </Container>

        <Footer/>

    </div>

  )
}
