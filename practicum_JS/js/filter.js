const correspond = {
    "Название": "structure",
    "Тип": "category",
    "Страна": "country",
    "Город": "city",
    "Год": ["yearFrom", "yearTo"],
    "Высота": ["heightFrom", "heightTo"]
}

const dataFilter = (dataForm) => {
    dictFilter = {};
    // перебираем все элементы формы с фильтрами
    for (const item of dataForm.elements) {
        // получаем значение элемента
        let valInput = item.value;
        // если поле типа text - приводим его значение к нижнему регистру
        if (item.type === "text") {
            valInput = valInput.toLowerCase();
        }
        if (item.type === "number") {
            if (valInput !== "") {
                valInput = Number(valInput);
            }
            else if (item.id.includes("From")) {
                valInput = -Infinity;
            }
            else if (item.id.includes("To")) {
                valInput = Infinity;
            }
        }
        /* САМОСТОЯТЕЛЬНО обработать значения числовых полей:
        - если в поле занесено значение - преобразовать valInput к числу;
        - если поле пусто и его id включает From - занести в valInput
        -бесконечность
        - если поле пусто и его id включает To - занести в valInput
        +бесконечность
        */
        // формируем очередной элемент ассоциативного массива
        dictFilter[item.id] = valInput;
    }
    return dictFilter;
}

const filterTable = (data, idTable, dataForm) =>{
    const datafilter = dataFilter(dataForm);

    // выбираем данные соответствующие фильтру и формируем таблицу из них
    let tableFilter = data.filter(item => {
        /* в этой переменной будут "накапливаться" результаты сравнения данных
        с параметрами фильтра */
        let result = true;

        // строка соответствует фильтру, если сравнение всех значения из input
        // со значением ячейки очередной строки - истина
        Object.entries(item).map(([key, val]) => {
            // текстовые поля проверяем на вхождение
            if (typeof val == 'string') {
                result &= val.toLowerCase().includes(datafilter[correspond[key]])
            }
            // САМОСТОЯТЕЛЬНО проверить числовые поля на принадлежность интервалу
            else if (typeof val === 'number') {
                if (key === "Год") {
                    result &= val >= datafilter.yearFrom && val < datafilter.yearTo;
                }
                if (key === "Высота") {
                    result &= val > datafilter.heightFrom && val <= datafilter.heightTo;
                }
            }
        });

        return result;
    });

    // САМОСТОЯТЕЛЬНО вызвать функцию, которая очищает таблицу с id=idTable
    // показать на странице таблицу с отфильтрованными строками
    clearTable(idTable);
    
    // если после фильтрации не выбрано ни одной записи — выводим только шапку
    if (tableFilter.length === 0) {
        const table = document.getElementById(idTable);
        const header = Object.keys(data[0]);
        const headerRow = createHeaderRow(header);
        table.append(headerRow);
    } else {
        createTable(tableFilter, idTable);
    }
};

const clearFilter = (idTable, dataForm, data) => {
    for (const item of dataForm.elements) {
        if (item.type === "text" || item.type === "number") {
            item.value = "";
        }
    }

    clearTable(idTable);
    createTable(data, idTable);
}