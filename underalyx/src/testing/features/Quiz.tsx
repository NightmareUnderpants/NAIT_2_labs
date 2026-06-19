import { Box, Button, Container, Typography } from '@mui/material';
import { quiz, tTasks } from "../quizData";
import Matching from "./Matching"
import Sorting from "./Sorting"
import ChooseTrue from './ChooseTrue';

import { RootState } from '../../store';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearSelectedAnswers } from './quizSlice';

type QuizResult = {
  type: "M" | "S" | "C";
  correctCount: number;
};

function Quiz() {
  const dispatch = useDispatch();

  const lists = useSelector((state: RootState) => state.lists.lists);

  const selectedAnswers = useSelector(
    (state: RootState) => state.lists.selectedAnswers
  );

  const getAnswers = (tasks: tTasks) => {
      const elems = tasks.map(item => item.answer);
      return elems.sort(() => Math.random() - 0.5);
  }

  const createAnswerLists = () => {
    return quiz.map(item => getAnswers(item.tasks));
  };
  
  const [results, setResults] = useState<QuizResult[] | null>(null);
  
  const [answers, setAnswers] = useState<string[][]>(() => createAnswerLists());
  
  const handleTest = () => {    
    const newResults = quiz.map((item, index) => {
      if (item.type === "C") {
        const selectedAnswer = selectedAnswers[index];
        const correctAnswer = item.tasks.find(task => task.question === "true")?.answer;

        return {
          type: item.type,
          correctCount: selectedAnswer === correctAnswer ? 1 : 0,
        };
      }

      return {
        type: item.type,
        correctCount: item.tasks.reduce((count, task, taskIndex) => {
          if (lists[index]?.[taskIndex] === task.answer) {
            return count + 1;
          }

          return count;
        }, 0),
      };
    });

    setResults(newResults);
  }

  const handleReset = () => {
    setResults(null);
    setAnswers(createAnswerLists());
    dispatch(clearSelectedAnswers());
  }

  const getResultLabel = (result: QuizResult, index: number) => {
    if (result.type === "C")
      return `Ответ ${result.correctCount > 0 ? "верный" : "не верный"}`

    if (result.correctCount >= quiz[index].tasks.length)
      return `Полностью верно`

    return `${result.correctCount} из ${quiz[index].tasks.length}`;
  }

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. { item.title }
          </Typography>
          {item.type === "M" && <Matching index={index} tasks={ item.tasks } isUseImage={item.isUseImage} answers={answers[index]} />}
          {item.type === "S" && <Sorting index={index} tasks={ item.tasks } isUseImage={item.isUseImage} answers={answers[index]} />}
          {item.type === "C" && <ChooseTrue index={index} tasks={item.tasks}/>}
        </Box>
        ))}
      <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
        <Button variant="contained" onClick={handleTest}>Проверить</Button>
        <Button variant="contained" onClick={handleReset}>Начать снова</Button>
      </Box>
      {results &&
        <Box>
          {results.map((item, index) => {
            return(
              <Box key={index + 1} component="section" sx={{ m: 2, p:2 }}>
                <Typography variant="h5" gutterBottom>
                  Задание {index + 1}: {getResultLabel(item, index)}
                </Typography>
              </Box>
            )
          })}
        </Box>
      }
    </Container>
  );
}

export default Quiz
