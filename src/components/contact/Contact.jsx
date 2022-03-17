import "./contact.css";
import Phone from "../../asset/phone.png";
import Email from "../../asset/email.png";
import Address from "../../asset/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_x0sqggi",
                "template_u9ywnh5",
                formRef.current,
                "user_kqRL6JF5N8VXvL0nfvVtm"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Discutons de votre projet</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +33 698109896
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            contact@Peter.centini.dev
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            175 Rue du Paradis, Paris  75000 Françe
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Quelle est votre histoire ?</b> Contactez-moi. Toujours disponible en
                        freelance si le bon projet se présente à moi.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Votre Nom" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Sujet de contact" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Ton Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Ton Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
