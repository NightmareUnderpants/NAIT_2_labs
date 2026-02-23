const createSortArr = (data) => { 
    let sortArr = []; 

    const sortSelects = data.getElementsByTagName('select'); 
     
    for (const item of sortSelects) {    
        const keySort = item.value; 

        if (keySort == 0) { 
            break; 
        } 

        const desc = document.getElementById(item.id + 'Desc').checked; 
        
        sortArr.push( 
          {column: keySort - 1,  
           direction: desc} 
        );  
    } 
    return sortArr;  
}; 

const sortTable = (idTable, formData) => { 
    const sortArr = createSortArr(formData); 

    if (sortArr.length === 0) { 
        return false; 
    } 

    let table = document.getElementById(idTable); 
    let rowData = Array.from(table.rows); 
    const headerRow = rowData.shift(); 
     
    rowData.sort((first, second) => { 
        for (let { column, direction } of sortArr) { 
            const firstCell = first.cells[column].innerHTML; 
            const secondCell = second.cells[column].innerHTML; 
    
            const comparison = firstCell.localeCompare(secondCell, "ru", {
                numeric: true,
                sensitivity: "base"
            }); 
               
            // учитываем направление сортировки 
            if (comparison !== 0) { 
                return (direction ? -comparison : comparison); 
            } 
        } 
        return 0;  
    }); 
     
    table.innerHTML = "";
    table.append(headerRow);

    let tbody = document.createElement("tbody");
    rowData.forEach(item => tbody.append(item));
    table.append(tbody);

    return true;
}