import { Box, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

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

function Matching({index, tasks, answers, isUseImage}: ComponentProps) {

    const dispatch = useDispatch();
  
    // Добавляем список ответов очередного задания в хранилище
    useEffect(() => {
        dispatch(addList({ index, items: answers }));
    }, [answers, dispatch, index]);

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
                                {!isUseImage && <ListItemText primary={item.question} />}
                                {isUseImage && (
                                    <Box
                                        component="img"
                                        src={item.question}
                                        alt={item.answer}
                                        sx={{
                                            width: '100%',
                                            height: 140,
                                            objectFit: 'cover',
                                            borderRadius: '5px',
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem> 
                    ))}
                </List>
            </Grid>

            <Grid size={6}>
                <SortableList index={index} answers={answers} isUseImage={isUseImage}/>
            </Grid>
        </Grid> 
    );
}

export default Matching
