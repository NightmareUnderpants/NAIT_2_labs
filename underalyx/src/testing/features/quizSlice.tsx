import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListsState {
  lists: string[][]; // хранит перемещаемые элементы каждого списка ответов
  selectedAnswers: (string | null)[];
}

const initialState: ListsState = {
   lists: [],
   selectedAnswers: [],
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<{index: number; items: string[]}>) => {
            const { index, items } = action.payload;
            state.lists[index] = items; 
        },
        setDraggedItems: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
            const { index, items } = action.payload;
            if (index >= 0 && index < state.lists.length) {
                state.lists[index] = items; // обновляем конкретный список
            }
        },
        setSelectedAnswer: (state, action: PayloadAction<{ index: number, answer: string}>) => {
            const { index, answer } = action.payload;
            state.selectedAnswers[index] = answer;
        },
        clearSelectedAnswers: (state) => {
            state.selectedAnswers = [];
        }
    },
});

// Экспортируем действия и редьюсер
export const { addList, setDraggedItems, setSelectedAnswer, clearSelectedAnswers } = listsSlice.actions;
export default listsSlice.reducer;
