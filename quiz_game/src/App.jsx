import "./app.css";
import Quiz from "./components/quiz/Quiz";
import Timer from "./components/timer/Timer";
import Start from "./components/start/Start";
import { useState, useEffect, useMemo } from "react";


function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "The best club in the world?",
      answers: [
        {
          text: "Arsenal",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Bayern",
          correct: false,
        },
        {
          text: "Chelsea",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the best sibling?",
      answers: [
        {
          text: "Rice man aka Eduski",
          correct: false,
        },
        {
          text: "Chuka",
          correct: false,
        },
        {
          text: "Adanna",
          correct: false,
        },
        {
          text: "Chima",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$1000" },
      { id: 2, amount: "$5000" },
      { id: 3, amount: "$7500" },
      { id: 4, amount: "$8000" },
      { id: 5, amount: "$10000" }
    ].reverse()

    , []);

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? <h1 className="endText">You earned: {earned} </h1> : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>

                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}


          </div>

          {/* money part */}
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (

                // basically ifquestionNumber is what is set in the useState at line 5, set to active
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}


              {/* <li className="moneyListItem active">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$600</span>
        </li>

        <li className="moneyListItem">
            <span className="moneyListItemNumber">3</span>
            <span className="moneyListItemAmount">$450</span>
        </li>

        <li className="moneyListItem">
            <span className="moneyListItemNumber">2</span>
            <span className="moneyListItemAmount">$300</span>
        </li>

        <li className="moneyListItem">
            <span className="moneyListItemNumber">1</span>
            <span className="moneyListItemAmount">$150</span>
        </li> */}
              {/* 
        <li className="moneyListItem"> $ 600 </li>
        <li className="moneyListItem"> $ 450 </li>
        <li className="moneyListItem"> $ 300 </li>
        <li className="moneyListItem"> $ 150 </li> */}
            </ul>
          </div>
        </>

      ) : <Start setUsername={setUsername} />}


    </div>
  );
}

export default App;
