import styles from "./Header.module.css"
import logo from "../../assets/images/logo.svg"

const Header = () => {
  return (
    <header>
        <div className={styles.logoContainer}>
            <img src={logo}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.heading}>
                <h1>REABERTURA <br/>SMART FIT</h1>
                <span className={styles.headingBorder}></span>
            </div>
            <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
        </div>
    </header>
  )
}

export default Header