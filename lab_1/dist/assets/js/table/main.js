document.addEventListener("DOMContentLoaded", function() {
    createTable(games, 'table');

    const sortForm = document.getElementById('sortForm');
    setSortSelects(games, sortForm);



    const fieldsFirst = document.getElementById('fieldsFirst');
    const fieldsSecond = document.getElementById('fieldsSecond');
    const fieldsThird = document.getElementById('fieldsThird');
    fieldsFirst.addEventListener('change', () => {
        changeNextSelect(fieldsFirst, 'fieldsSecond', 'fieldsThird');
    });
    fieldsSecond.addEventListener('change', () => {
        changeNextSelect(fieldsSecond, 'fieldsThird', 'fieldsThird');
    });



    const sortBtn = document.getElementById("sortBtn");
    sortBtn.addEventListener('click', () => {
        sortTable('table', sortForm);
        console.log(createSortArr(sortForm));
    })
    
    const resetSortBtn = document.getElementById("resetSortBtn");
    resetSortBtn.addEventListener('click', () => {
        sortForm.reset();
        clearTable(idTable);
        createTable(games, 'table');
    })
    
});


document.addEventListener("DOMContentLoaded", function() {
    const findBtn = document.getElementById('findBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const form = document.getElementById('filter');

    findBtn.addEventListener('click', () => {
        filterTable(games, 'table', form);
    })

    resetFilterBtn.addEventListener('click', () => {
        clearFilter('table', form, games);
    })
});


const createOption = (str, val) => { 
    let item = document.createElement('option'); 
    item.text = str; 
    item.value = val; 
    return item; 
}

const setSortSelect = (arr, sortSelect) => { 
    sortSelect.append(createOption('Нет', 0)); 
    
    arr.forEach((item, index) => { 
        sortSelect.append(createOption(item, index + 1)); 
    }); 
}

const setSortSelects = (data, dataForm) => {
    const head = Object.keys(data[0]);

    const allSelect = dataForm.getElementsByTagName('select');

    let isFirst = true;
    for (const item of allSelect){
        if (item.tagName === "SELECT") {
            setSortSelect(head, item);

            if (isFirst) {
                isFirst = false;    
            }
            else {
                item.disabled = true;
            }
        }
    }
}

const changeNextSelect = (curSelect, nextSelectId, thirdSelectId) => { 
    let nextSelect = document.getElementById(nextSelectId);
    let thirdSelect = document.getElementById(thirdSelectId);
    nextSelect.disabled = false; 

    nextSelect.innerHTML = curSelect.innerHTML;
    thirdSelect.innerHTML = curSelect.innerHTML;

    if (curSelect.value != 0) { 
        nextSelect.remove(curSelect.value);
    } else {
        nextSelect.value = 0;
        thirdSelect.value = 0;
        nextSelect.disabled = true;
        thirdSelect.disabled = true;
    } 
}