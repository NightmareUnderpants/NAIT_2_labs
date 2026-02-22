document.addEventListener("DOMContentLoaded", function() {
    createTable(buildings, 'list');

    // инициализация формы сортировки
    const sortForm = document.getElementById('sort');
    setSortSelects(buildings[0], sortForm);

    // обработчик изменения первого уровня сортировки
    const fieldsFirst = document.getElementById('fieldsFirst');
    fieldsFirst.addEventListener('change', () => {
        changeNextSelect(fieldsFirst, 'fieldsSecond');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById('clearBtn');
    const form = document.getElementById('filter');

    clearBtn.addEventListener('click', () => {
        clearFilter('list', form, buildings);
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const findBtn = document.getElementById('findBtn');
    const form = document.getElementById('filter');

    findBtn.addEventListener('click', () => {
        filterTable(buildings, 'list', form);
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const sortBtn = document.getElementById('sortBtn');
    const sortForm = document.getElementById('sort');

    sortBtn.addEventListener('click', () => {
        sortTable('list', sortForm);
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const resetSortBtn = document.getElementById('resetSortBtn');
    const sortForm = document.getElementById('sort');

    resetSortBtn.addEventListener('click', () => {
        sortForm.reset();
        setSortSelects(buildings[0], sortForm);
        createTable(buildings, 'list');
    })
});


// формирование полей элемента списка с заданным текстом и значением 
const createOption = (str, val) => { 
    let item = document.createElement('option'); 
    item.text = str; 
    item.value = val; 
    return item; 
}

// формирование поля со списком  
// параметры – массив со значениями элементов списка и элемент select 
 
const setSortSelect = (arr, sortSelect) => { 
     
    // создаем OPTION Нет и добавляем ее в SELECT 
    sortSelect.append(createOption('Нет', 0)); 
    // перебираем массив со значениями опций 
     arr.forEach((item, index) => { 
       // создаем OPTION из очередного ключа и добавляем в SELECT 
       // значение атрибута VALUE увеличиваем на 1, так как значение 0 имеет опция Нет 
        sortSelect.append(createOption(item, index + 1)); 
    }); 
}

// формируем поля со списком для многоуровневой сортировки
const setSortSelects = (data, dataForm) => {

    // выделяем ключи словаря в массив
    const head = Object.keys(data);

    // находим все SELECT в форме
    const allSelect = dataForm.getElementsByTagName('select');

    let isFirst = true;
    for (const item of dataForm.elements){
        if (item.tagName === "SELECT") {
            // формируем очередной SELECT
            setSortSelect(head, item);
            
            // САМОСТОЯТЕЛЬНО все SELECT, кроме первого, сделать неизменяемым 
            if (isFirst) {
                isFirst = false;
            }
            else {
                item.disabled = true;
            }
        }
    }
}

// настраиваем поле для следующего уровня сортировки 
const changeNextSelect = (curSelect, nextSelectId) => { 
    let nextSelect = document.getElementById(nextSelectId); 
    nextSelect.disabled = false; 
    // в следующем SELECT выводим те же option, что и в текущем 
    nextSelect.innerHTML = curSelect.innerHTML; 
    // удаляем в следующем SELECT уже выбранную в текущем опцию 
    // если это не первая опция - отсутствие сортировки 
    if (curSelect.value != 0) { 
        nextSelect.remove(curSelect.value); 
    } else { 
        nextSelect.disabled = true; 
    } 
} 