import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ListItem, ListItemText, ListItemButton, ListItemIcon} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface SortableItemProps {
   item: string,
   isUseImage?: boolean,
   direction?: 'vertical' | 'horizontal',
}

export function SortableItem({ item, isUseImage, direction = 'vertical' }: SortableItemProps) {
    const id = item; /* идентификатор для useSortable */
    const isHorizontal = direction === 'horizontal';
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <ListItem
            ref={ setNodeRef }
            style={ style }
            sx={isHorizontal ? {
                width: isHorizontal ? 180 : '100%',
                p: 0,
            } : undefined}
            { ...attributes }
            { ...listeners }>
            <ListItemButton
                sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    minHeight: isUseImage ? 156 : 'auto',
                    width: '100%',
                }}
                data-answer-row>
            <ListItemIcon>
                <DragIndicatorIcon />
            </ListItemIcon>
            <ListItemText primary={ item } />
            </ListItemButton>
        </ListItem>
    );
}
