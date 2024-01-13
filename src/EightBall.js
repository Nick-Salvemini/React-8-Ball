import "./EightBall.css";
import answers from "./answers";
import { useState } from 'react';



const EightBall = () => {
    const [text, setText] = useState('Think of a Question');
    const [className, setClassName] = useState('EightBall')


    const shakeEightBall = () => {
        let rand = Math.floor(Math.random() * answers.length);
        let randAnswer = answers[rand]

        setText(randAnswer.msg)
        setClassName(`EightBall-${randAnswer.color}`)
    }

    return (
        <div className={className} onClick={shakeEightBall}>
            <h1>{text}</h1>
        </div>
    )
}

export default EightBall