import logo from "../img/logo_lg.png"
import displayImage from "../img/DisplayImg.png"
import styles from "../components/Side.module.css"
import {Link} from 'react-router-dom'



const Side = () =>{
  return (
    <div className={styles.side}>
      <Link to="/"><img className={styles.logo}src={logo} alt="logo"/></Link>
      <img className={styles.display} src={displayImage} alt="Display"/>
    </div>
  )
}


export default Side