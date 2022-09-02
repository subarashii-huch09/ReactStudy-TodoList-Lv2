import logo from "../img/logo_lg.png"
import emptyWorkImage from "../img/empty-bg.png"
import {Link} from 'react-router-dom'



const Side = () =>{
  return (
    <div>
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <img src={emptyWorkImage} alt="Empty-Work"/>
    </div>
  )
}


export default Side