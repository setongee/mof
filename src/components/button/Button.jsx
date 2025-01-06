import { ArrowDown } from 'iconoir-react'
import './button.scss'

export default function Button({content, type, arrow, arrow__type}) {
  return (
    <div className={`button ${type ? type : ''}`}>
        {
          !arrow ? <div>{content}</div> 
          : 
          <div className="arrowType"> 

            {content} 
            <div className="icon"> { arrow__type === 'down' ? <ArrowDown/> : null } </div>
            
          </div>
        }
    </div>
  )
}
