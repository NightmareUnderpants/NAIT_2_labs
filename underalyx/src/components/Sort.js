import { useState } from "react";

/*
    Компонент для сортировки таблицы
    props:
        fullData - полные данные
        data - текущие данные таблицы
        sorting - функция обновления данных после сортировки
*/
const Sort = (props) => {
    const columns = Object.keys(props.fullData[0]);

    const [selectFirst, setSelectFirst] = useState("");
    const [selectSecond, setSelectSecond] = useState("");
    const [selectThird, setSelectThird] = useState("");

    const changeSelectFirst = (event) => {
        const value = event.target.value;
        setSelectFirst(value);

        if (value === "") {
            setSelectSecond("");
            setSelectThird("");
        }
    };

    const changeSelectSecond = (event) => {
        const value = event.target.value;
        setSelectSecond(value);

        if (value === "") {
            setSelectThird("");
        }
    };

    const changeSelectThird = (event) => {
        setSelectThird(event.target.value);
    };

    const handleSort = (event) => {
        event.preventDefault();

        const sortFields = [
            event.target.fieldFirst.value,
            event.target.fieldSecond.value,
            event.target.fieldThird.value
        ].filter(Boolean);

        let arr = [...props.data];

        arr.sort((a, b) => {
            for (const item of sortFields) {
                let firstValue = a[item];
                let secondValue = b[item];

                if (typeof firstValue === "string") {
                    firstValue = firstValue.toLowerCase();
                }

                if (typeof secondValue === "string") {
                    secondValue = secondValue.toLowerCase();
                }

                if (firstValue < secondValue) {
                    return -1;
                }

                if (firstValue > secondValue) {
                    return 1;
                }
            }

            return 0;
        });

        props.sorting(arr);
    };

    const handleReset = () => {
        setSelectFirst("");
        setSelectSecond("");
        setSelectThird("");
        props.reset();
    };

    return (
        <form className="card card-soft p-3 table-page__card" onSubmit={handleSort} onReset={handleReset}>
            <div className="row g-3">
                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsFirst">Первичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldFirst"
                        value={selectFirst}
                        onChange={changeSelectFirst}
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsSecond">Вторичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldSecond"
                        value={selectSecond}
                        onChange={changeSelectSecond}
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsThird">Третичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldThird"
                        value={selectThird}
                        onChange={changeSelectThird}
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
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
