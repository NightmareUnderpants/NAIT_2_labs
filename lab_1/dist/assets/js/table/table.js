const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);

    /* создание тела таблицы */
    const bodyRows = createBodyRows(data);
    table.append(bodyRows);
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

const createTableHeaderOnly = (idTable) => {
    const table = document.getElementById(idTable);
    if (!table) return;

    const keys = ["ID игрока", "Игра", "Продолжительность (мин)", "Производительность", "Версия"];

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    keys.forEach((k) => {
        const th = document.createElement("th");
        th.textContent = k;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
};
