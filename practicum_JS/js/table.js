const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);
    const header = Object.keys(data[0]);

    /* создание шапки таблицы */
    const headerRow = createHeaderRow(header);
    table.append(headerRow);

    /* создание тела таблицы */
    const bodyRows = createBodyRows(data);
    table.append(bodyRows);
};

const createHeaderRow = (headers) => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerHTML = header;
        tr.append(th);
    });
    return tr;
};

const createBodyRows = (data) => {
    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    });

    return tbody;
};

const clearTable = (idTable) => {
    const tbody = document.getElementById(idTable);
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
};