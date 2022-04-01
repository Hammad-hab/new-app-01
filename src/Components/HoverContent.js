import './Index.css'
import Image from './logo.svg'
function HoverContent(props) {
    return (
    <div className="page hover">
      <img src={Image}/>
      {props.content}
    </div>
    )
}

export default HoverContent