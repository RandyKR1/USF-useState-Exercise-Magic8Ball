import React, {useState} from "react";

const EightBall = () => {

    const answerArr = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]

      const [answer, setAnswer] = useState({msg: "Think of a question", color: "Black"});

      const randomIdx = Math.floor(Math.random() * answerArr.length);
      const randomAnswer = answerArr[randomIdx];

      const handleChange = () => {
        setAnswer(answer => randomAnswer);
    }

      return(
        <div>
            <h1>Eight Ball</h1>
            <button 
                onClick={handleChange}
                style= {{
                    backgroundColor : answer.color,
                    height: '400px',
                    width: '400px',
                    borderRadius: '50%',
                    color: 'white',
                    border: "none",
                    transition: ".25s ease-in",
                    fontSize: "1.5em",
                    font: 'fantasy',
                    boxShadow: '0px 0px 20px black'
                }}>
                {answer.msg}
            </button>
        </div>
      )


}

export default EightBall