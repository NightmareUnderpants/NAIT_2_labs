import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

import List from '@mui/material/List';

import {SortableItem} from '../components/SortableItem'

import { useDispatch, useSelector } from 'react-redux';
import { setDraggedItems } from './quizSlice';
import { RootState } from '../../store';

interface ComponentProps {
    index: number,
    answers: string[],
    isUseImage?: boolean,
    direction?: 'vertical' | 'horizontal',
}

function SortableList({ index, answers, isUseImage, direction = 'vertical' }: ComponentProps ) {
    const dispatch = useDispatch();
    const arr = useSelector((state: RootState) => state.lists.lists[index])
    const draggedItems = arr || []; 
    const isHorizontal = direction === 'horizontal';

    const handleDragEnd = (event: any) => {
      const { active, over } = event;
      if (active.id !== over.id) {
        const oldIndex = draggedItems.indexOf(active.id);
        const newIndex = draggedItems.indexOf(over.id);
        const newList = arrayMove(draggedItems, oldIndex, newIndex);
        dispatch(setDraggedItems({ index, items: newList }));
      }
    };
  
    return (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ draggedItems } 
                        strategy={isHorizontal ? horizontalListSortingStrategy : verticalListSortingStrategy}>
          <List
            sx={isHorizontal ? {
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              flexWrap: 'wrap',
              alignItems: 'stretch',
            } : undefined}>
            {draggedItems.map((item) => (
              <SortableItem key={ item } item={ item } isUseImage={isUseImage} direction={direction} />
            ))}
          </List>
        </SortableContext>
      </DndContext>
    );
}

export default SortableList;
