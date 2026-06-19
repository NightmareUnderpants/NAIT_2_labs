import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import {tTasks} from "../quizData"
import SortableList from "./SortableList"

import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './quizSlice';

interface ComponentProps {
    index: number,
    tasks: tTasks,
    answers: string[],
}

function Matching({index, tasks, answers}: ComponentProps) {

    const dispatch = useDispatch();
  
    // Добавляем список ответов очередного задания в хранилище
    useEffect(() => {
        dispatch(addList({ index, items: answers }));
    }, [answers]);

    return (
        <Grid container spacing={2}>
            <Grid size={6}>
                <List>
                    {tasks.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemButton 
                            sx={{
                                border: '1px solid gray',
                                borderRadius: '5px',
                                textAlign: 'right',
                            }}>
                                <ListItemText primary={item.question} />
                            </ListItemButton>
                        </ListItem> 
                    ))}
                </List>
            </Grid>

            <Grid size={6}>
                <SortableList index={index} answers={answers}/>
            </Grid>
        </Grid> 
    );
}

export default Matching
