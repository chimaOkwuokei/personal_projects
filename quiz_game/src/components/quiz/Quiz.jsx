import { useState, useEffect } from "react";

export default function Quiz({ data, setStop, questionNumber, setQuestionNumber }) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);


    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration);
    };


    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active")

        delay(2000, () =>
            setClassName(a.correct ? "answer correct" : "answer wrong")
        );
         
        //increases question number by 1
        delay(6000, () =>
            {
                if(a.correct){
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                }
                // else if (questionNumber === questions.length - 1) {
                //     // Set stop to true when it's the last question
                //     setStop(true);
                // }
                else{
                    //triggers the setstop and stops the game
                    setStop(true);
                   
                }
            }
        );
        // setTimeout(() => {
        //     setClassName(a.correct ? "answer correct" : "answer wrong")
        // }, 3000)
    };

    return (
        <div className="trivia">

            <div className="question">{question?.question}</div>

            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"}
                        onClick={() => handleClick(a)}>
                        {a.text}

                    </div>
                ))}


            </div>

        </div>
    );
}
