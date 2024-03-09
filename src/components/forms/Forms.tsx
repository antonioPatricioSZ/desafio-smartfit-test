import styles from "./Forms.module.css"
import hour from "../../assets/images/hour.png"
import { useState } from "react"

const Forms = () => {

    const [results, setResults] = useState([])
 
  return (
    <form className={styles.formGroup} >
        <div className={styles.formIcon} >
            <img src={hour}/>
            Horário
        </div>
        <h3>Qual periodo quer treinar?</h3>
        <div className={styles.radioWrapper} >
            <input type="radio" name="morning" value="morning" />
            <label htmlFor="morning">Manhã</label>
            <span>06:00 ás 12:00</span>
        </div>
        <div className={styles.radioWrapper} >
            <input type="radio" name="afternoon" value="afternoon" />
            <label htmlFor="afternoon">Tarde</label>
            <span>12:01 ás 18:00</span>
        </div>
        <div className={styles.radioWrapper} >
            <input type="radio" name="night" value="night" />
            <label htmlFor="night">Noite</label>
            <span>18:01 ás 23:00</span>
        </div>
        <div className={styles.checkboxWrapper} >
            <input type="checkbox" id="show-closed" name="show-closed"/>
            <label htmlFor="show-closed">Exibir unidades fechadas</label>
            <span>Resultados encontrados: {results.length}</span>
        </div>
        <div className={styles.btnWrapper} >
            <button className={`${styles.btn} ${styles.btnPrymary}`} >Encontrar unidade</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`} >Limpar</button>
        </div>
    </form>
  )
}

export default Forms