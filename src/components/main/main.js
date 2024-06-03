import { useState } from 'react'
import styles from './main.module.css'

export default function Main() {
    const [mensagem, setMensage] = useState ('')
    const [messages1, setMessages1]= useState ([{ idy: ' patrick ',  chaty: ' oi ' }])
    const [messages, setMessages]= useState ([{ idx: ' maria ',  chatx: '' }])
    
    function receberEnvio(e) {
        e.preventDefault()
         setMessages ([{ idx: ' maria ',  chatx: mensagem }])
         setMensage('');
        
    }
    
   
    
    return (
        <main>
            <section>
                <span>nome:{messages1[0].idy}: {messages1[0].chaty}</span>
                <br></br>
                <span> nome:{messages[0].idx}: {messages[0].chatx}</span>
            </section>
            <br></br>
            <form onSubmit={receberEnvio}>
                <input type='text' className={styles.inputchat}  value={mensagem} onChange={(e) => setMensage(e.target.value)} placeholder='Digite uma mensagem' />
                <input type='submit' className={styles.submit} />
            </form>
        </main>
    )

}