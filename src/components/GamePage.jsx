import React, {useState} from 'react'
import data from '../data.js'
import '../stylesheets/GamePage.css'

function GamePage() {
    const [questions, setQuestions] = useState(data);
    const [current, setCurrent] = useState(0);
    const [points, setPoints] = useState(0);
    const [finish, setFinish] = useState(false);
    
    const checkAnswer = (id) => {
        if(questions[current].correct === id){
            setPoints(prev => prev + 1);
            setCurrent(prev => prev + 1)
        }
        if(current === 9){
            setFinish(true)
        }
    }

    return (
        <div className='main-container'>
            <div className='upper-container'>
                <h2>Senior Career</h2>
                <h2>Player #{current + 1}</h2>
                <h2>POINTS: {points}</h2>
            </div>
            {
                finish? <div className='final-message'><h1>CONGRATS!! YOUR SCORE IS {points}</h1></div>:(
                    <>
                    <div className='container'>
                        <div>
                        {
                            questions[current].senior_career.map((item, id) => (
                                <div className='data' key={id}>
                                    <span className='year'>{item.year}</span>
                                    <span>{item.club}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='btn-container'>
                    <button onClick={ () => checkAnswer(0) }>{questions[current].options[0]}</button>
                    <button onClick={ () => checkAnswer(1) }>{questions[current].options[1]}</button>
                    <button onClick={ () => checkAnswer(2) }>{questions[current].options[2]}</button>
                </div>
                </>
                )
            }
            
        </div>
    )
}

export default GamePage;
