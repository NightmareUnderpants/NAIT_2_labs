import { Box, Button, Container, Typography } from '@mui/material';
import { quiz, tTasks } from "../quizData";
import Matching from "./Matching"

import { RootState } from '../../store';

import { useState } from "react"
import { useSelector } from "react-redux"

function Quiz() {

  const lists = useSelector((state: RootState) => state.lists.lists);

  const getAnswers = (tasks: tTasks) => {
      const elems = tasks.map(item => item.answer);
      return elems.sort(() => Math.random() - 0.5);
  }

  const createAnswerLists = () => {
    return quiz.map(item => getAnswers(item.tasks));
  };
  
  const [results, setResults] = useState<number[] | null>(null);
  
  const [answers, setAnswers] = useState<string[][]>(() => createAnswerLists());
  
  const handleTest = () => {    
    const newResults = quiz.map((item, index) => 
      item.tasks.reduce((count, task, taskIndex) => {
        if (lists[index][taskIndex] === task.answer) {
          return count + 1;
        }

        return count;
      }, 0)
    );

    setResults(newResults);
  }

  const handleReset = () => {
    setResults(null);
    setAnswers(createAnswerLists());
  }

  const getResultLabel = (result: number, index: number) => {
    if (result >= quiz[index].tasks.length)
      return `Полностью верно`

    return `${result} из ${quiz[index].tasks.length}`;
  }

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
                {index + 1}. { item.title }
          </Typography>
          <Matching index={index} tasks={ item.tasks } answers={answers[index]} />
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