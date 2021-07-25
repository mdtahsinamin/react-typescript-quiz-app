import React, { useState } from "react";
import { Difficulty, fetchQuiz, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;
const CATEGORY_NUMBER = 18;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //console.log(fetchQuiz(TOTAL_QUESTIONS, CATEGORY_NUMBER, Difficulty.MEDIUM));

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuiz(
      TOTAL_QUESTIONS,
      CATEGORY_NUMBER,
      Difficulty.MEDIUM
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = e.currentTarget.value;

      // check the answer with correct answer

      const correct = questions[number].correct_answer === answer;

      // add score if answer is correct
      if (correct) setScore(score + 1); // pre => pre + 1

      // save answer in the array for user answer

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // next question if not the last question
    let nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz of Science: Computers</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score:{score}</p> : null}

        {loading && <img src="./images/fidget-spinner.gif" alt="Loading..." />}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
        !gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Questions
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
