import React, { useState } from 'react';
import { quiz } from './questions';
import { divWrapper, head, span1, head2, quizWrap, btn1, btn2 } from './styles';

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, choices, correctAnswer } = questions[activeQuestion];

    const onClickNext = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 25,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (
        <div className='static text-zinc-900 w-full grid justify-center items-center h-svh'>
            <div className={divWrapper}>
                {!showResult ? (
                    <div>
                        <h2 className={`${head} mb-4`}>Scary Movie Quiz</h2>
                        <div className='flex items-center justify-center'>
                            <span className={`active-question-no ${span1}`}>{addLeadingZero(activeQuestion + 1)}</span>
                            <span className={`total-question ${span1}`}>/{addLeadingZero(questions.length)}</span>
                        </div>
                        <h2 className={head2}>{question}</h2>
                        <div className={quizWrap}>
                            {choices.map((answer, index) => (
                                <button
                                    onClick={() => onAnswerSelected(answer, index)}
                                    key={answer}
                                    className={`${selectedAnswer === index ? 'selected-answer' : null} ${btn1}`}>
                                    {answer}
                                </button>
                            ))}
                        </div>
                        <div className='grid grid-cols-1 justify-center items-center p-4'>
                            <button className={btn2} onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='result container'>
                        <h3 className={head}>Results</h3>
                        <p className={btn1}>
                            Total Question: <span>{questions.length}</span>
                        </p>
                        <p className={btn1}>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p className={btn1}>
                            Correct Answers: <span>{result.correctAnswers}</span>
                        </p>
                        <p className={btn1}>
                            Wrong Answers: <span>{result.wrongAnswers}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Quiz;