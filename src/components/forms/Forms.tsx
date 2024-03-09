import styles from "./Forms.module.css"
import hourImage from "../../assets/images/hour.png"
import { FormEvent, useRef, useState } from "react"

const Forms = () => {

    const [results, setResults] = useState([])
    const[hour, setHour] = useState<string>()
    const[showClosed, setShowClosed] = useState<boolean>(false)

    // só consegui limpar o input do tipo rádio pq usei isso = checked={hour === "night"} no input,   e no checkboc usei = checked={showClosed}

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const data = {
            hour, 
            showClosed
        }

        console.log(data)
    }
    
    const clearForm = (e: FormEvent) => {
        e.preventDefault()

       setHour("")
       setShowClosed(false)
    }
 
  return (
    <form className={styles.formGroup} onSubmit={handleSubmit} >
        <div className={styles.formIcon} >
            <img src={hourImage}/>
            Horário
        </div>
        <h3>Qual periodo quer treinar?</h3>
        <div className={styles.radioWrapper} >
            <input type="radio" value="morning" checked={hour === "morning"} onChange={(e) => setHour(e.target.value)} />
            <label htmlFor="morning">Manhã</label>
            <span>06:00 ás 12:00</span>
        </div>
        <div className={styles.radioWrapper} >
            <input type="radio" value="afternoon" checked={hour === "afternoon"} onChange={(e) => setHour(e.target.value)} />
            <label htmlFor="afternoon">Tarde</label>
            <span>12:01 ás 18:00</span>
        </div>
        <div className={styles.radioWrapper} >
            <input type="radio" value="night" checked={hour === "night"} onChange={(e) => setHour(e.target.value)} />
            <label htmlFor="night">Noite</label>
            <span>18:01 ás 23:00</span>
        </div>

        <div className={styles.checkboxWrapper} >
          <div className={styles.checkbox} >
            <input type="checkbox" id="showClosed" checked={showClosed} onChange={(e) => setShowClosed(e.target.checked)} />
            <label htmlFor="showClosed">Exibir unidades fechadas</label>
          </div>
            <span>Resultados encontrados: {results.length}</span>
        </div>

        <div className={styles.btnWrapper} >
            <button type="submit" className={`${styles.btn} ${styles.btnPrymary}`} >Encontrar unidade</button>
            <button onClick={clearForm}  className={`${styles.btn} ${styles.btnSecondary}`} >Limpar</button>
        </div>
    </form>
  )
}

export default Forms