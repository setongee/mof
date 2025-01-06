import React from 'react'
import Container from '../container/Container'
import { ArrowUpRight } from 'iconoir-react'
import './mof.scss'

export default function Rrs() {

    const styles = {
        color : 'crimson',
        height : '10px',
        width : '1px',
        backgroundColor : '#fff'
    }

  return (

    <div className="mof">

        <Container>

            <div className='flex flex__align__center padding__top__bottom_15 gap__20 end-j rrsx'>

              <a className='text__trend font__weight__600 font__11 cream flex flex__align__center gap__10' target='_blank' href="https://luc.lagosstate.gov.ng/home"> Land Use Charge <ArrowUpRight/> </a>

              <div className="v-line"></div>

              <a className='text__trend font__weight__600 font__11 cream flex flex__align__center gap__10' target='_blank' href="https://lslga.org/"> Lagos State Lotteries Board <ArrowUpRight/> </a>

              <div className="v-line"></div>

              <a className='text__trend font__weight__600 font__11 cream flex flex__align__center gap__10' target='_blank' href="https://lawnigeria.com/laws/2020/04/22/wharf-landing-fees-law-of-lagos-state/"> Wharf Landing Fees <ArrowUpRight/> </a>

            </div>

        </Container>
        
    </div>

  )

}
