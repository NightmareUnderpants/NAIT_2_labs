import { useState } from "react";

/*
    компонент для сортировки таблицы
    props:
        fullData - полные данные
        sorting - функция обновления данных для сортировки
*/
const Sort = (props) => {
    const columns = ["ID", "Игра", "Продолжительность", "Производительность", "Версия"];

    const [sortConfig, setSortConfig] = useState({
        field1: "",
        desc1: false,
        field2: "",
        desc2: false,
        field3: "",
        desc3: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setSortConfig((prev) => {
            const next = {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            };

            if (name === "field1" && value === "") {
                next.field2 = "";
                next.desc2 = false;
                next.field3 = "";
                next.desc3 = false;
            }

            if (name === "field1" && value !== prev.field1) {
                next.field2 = "";
                next.desc2 = false;
                next.field3 = "";
                next.desc3 = false;
            }

            if (name === "field2" && value === "") {
                next.field3 = "";
                next.desc3 = false;
            }

            if (name === "field2" && value !== prev.field2) {
                next.field3 = "";
                next.desc3 = false;
            }

            return next;
        });
    };

    const handleSort = (event) => {
        event.preventDefault();

        const rules = [
            { field: sortConfig.field1, desc: sortConfig.desc1 },
            { field: sortConfig.field2, desc: sortConfig.desc2 },
            { field: sortConfig.field3, desc: sortConfig.desc3 }
        ].filter((rule) => rule.field !== "");

        if (rules.length === 0) {
            props.sorting(props.fullData);
            return;
        }

        const sorted = [...props.fullData].sort((a, b) => {
            for (const rule of rules) {
                let valueA = a[rule.field];
                let valueB = b[rule.field];

                if (typeof valueA === "string") {
                    valueA = valueA.toLowerCase();
                }

                if (typeof valueB === "string") {
                    valueB = valueB.toLowerCase();
                }

                if (valueA < valueB) {
                    return rule.desc ? 1 : -1;
                }

                if (valueA > valueB) {
                    return rule.desc ? -1 : 1;
                }
            }

            return 0;
        });

        props.sorting(sorted);
    };

    const handleReset = () => {
        setSortConfig({
            field1: "",
            desc1: false,
            field2: "",
            desc2: false,
            field3: "",
            desc3: false
        });

        props.sorting(props.fullData);
    };

    const firstLevelOptions = columns;
    const secondLevelOptions = columns.filter((item) => item !== sortConfig.field1);
    const thirdLevelOptions = columns.filter(
        (item) => item !== sortConfig.field1 && item !== sortConfig.field2
    );

    return (
        <form className="card card-soft p-3 table-page__card" onSubmit={handleSort} onReset={handleReset}>
            <div className="row g-3">
                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsFirst">Первичная сортировка:</label>
                    <select
                        className="form-select"
                        name="field1"
                        id="fieldsFirst"
                        value={sortConfig.field1}
                        onChange={handleChange}
                    >
                        <option value="">Не выбрано</option>
                        {firstLevelOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            id="fieldsFirstDesc"
                            name="desc1"
                            type="checkbox"
                            checked={sortConfig.desc1}
                            onChange={handleChange}
                            disabled={!sortConfig.field1}
                        />
                        <label className="form-check-label" htmlFor="fieldsFirstDesc">По убыванию</label>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsSecond">Вторичная сортировка:</label>
                    <select
                        className="form-select"
                        name="field2"
                        id="fieldsSecond"
                        value={sortConfig.field2}
                        onChange={handleChange}
                        disabled={!sortConfig.field1}
                    >
                        <option value="">Не выбрано</option>
                        {secondLevelOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            id="fieldsSecondDesc"
                            name="desc2"
                            type="checkbox"
                            checked={sortConfig.desc2}
                            onChange={handleChange}
                            disabled={!sortConfig.field2}
                        />
                        <label className="form-check-label" htmlFor="fieldsSecondDesc">По убыванию</label>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsThird">Третичная сортировка:</label>
                    <select
                        className="form-select"
                        name="field3"
                        id="fieldsThird"
                        value={sortConfig.field3}
                        onChange={handleChange}
                        disabled={!sortConfig.field2}
                    >
                        <option value="">Не выбрано</option>
                        {thirdLevelOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            id="fieldsThirdDesc"
                            name="desc3"
                            type="checkbox"
                            checked={sortConfig.desc3}
                            onChange={handleChange}
                            disabled={!sortConfig.field3}
                        />
                        <label className="form-check-label" htmlFor="fieldsThirdDesc">По убыванию</label>
                    </div>
                </div>
            </div>

            <div className="mt-3 d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-light" type="submit" id="sortBtn">Применить сортировку</button>
                <button className="btn btn-outline-secondary" type="reset" id="resetSortBtn">Сбросить</button>
            </div>
        </form>
    );
};

export default Sort;
