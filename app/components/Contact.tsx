import contact_styles from '../styles/modules/contact.module.css'
import module_styles from "../styles/modules/module.module.css"
import input_styles from '../styles/modules/input.module.css'

const Contact = () => {
    return (
        <div className={module_styles.module} id="contact">
            <header className={module_styles.header}>
                <h2>Contact.</h2>
            </header>
            <div className={contact_styles.container}>
                <input type="email" name="email" id="email" placeholder="> e-mail" className={input_styles.input} />
                <textarea name="message" id="message" placeholder="> votre message" className={input_styles.textarea}></textarea>
                <button className={input_styles.button}>Envoyer</button>
            </div>
        </div>
    );
}

export default Contact;