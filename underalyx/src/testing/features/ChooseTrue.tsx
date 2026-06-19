import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import {tTasks} from "../quizData"

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAnswer } from './quizSlice';
import { RootState } from '../../store';



interface ComponentProps {
  index: number;
  tasks: tTasks;
}

function ChooseTrue({index, tasks}: ComponentProps)  {

    const dispatch = useDispatch();

    const selectedAnswer = useSelector((state: RootState) => state.lists.selectedAnswers[index]);

    const handleChoose = (answer: string) => {
        dispatch(setSelectedAnswer({index, answer}))
    };
    
    return(
        <Grid container spacing={2}>
            <Grid size={12}>
                <List>
                    {tasks.map((item, index) => {
                        const isSelected = selectedAnswer === item.answer;

                        return(
                            <ListItem key={index}>
                                <ListItemButton
                                    selected={isSelected}
                                    onClick={() => handleChoose(item.answer)}
                                    sx={{
                                        border: '1px solid gray',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <ListItemText primary={item.answer}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Grid> 
    )
}

export default ChooseTrue;
