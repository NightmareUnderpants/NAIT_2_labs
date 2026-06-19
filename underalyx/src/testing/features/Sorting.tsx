import { Grid } from '@mui/material';

import {tTasks} from "../quizData"
import SortableList from "./SortableList"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './quizSlice';


interface ComponentProps {
    index: number,
    tasks: tTasks,
    answers: string[],
    isUseImage?: boolean,
}

function Sorting({index, tasks, answers, isUseImage}: ComponentProps) {

    const dispatch = useDispatch();
  
    // Добавляем список ответов очередного задания в хранилище
    useEffect(() => {
        dispatch(addList({ index, items: answers }));
    }, [answers, dispatch, index]);

    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <SortableList index={index} answers={answers} isUseImage={isUseImage} direction="horizontal"/>
            </Grid>
        </Grid> 
    )
}

export default Sorting;
