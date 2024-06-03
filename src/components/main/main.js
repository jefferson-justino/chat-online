import { useState } from 'react'
import styles from './main.module.css'

export default function Main() {
    const [mensagem, setMensage] = useState ('')
    const [messages, setMessages]= useState ([{ idx: 1, idy: 2, chatx: 'porra', chaty: '' }])
    
    function receberEnvio(e) {
        e.preventDefault()
         setMessages ([{ idx: 1, idy: 2, chatx: '', chaty: mensagem }])

        console.log('foi '+messages[0].chaty)
    }
    
   
    
    return (
        <main>
            <section>
                <span>{messages[0].chatx}</span>
                <br></br>
                <span>{messages[0].chaty}</span>
            </section>
            <form onSubmit={receberEnvio}>
                <input type='text' className={styles.inputchat} onChange={(e) => setMensage(e.target.value)} placeholder='Digite uma mensagem' />
                <input type='submit' className={styles.submit} />
            </form>
        </main>
    )

}