/*
    компонент для сортировки таблицы
    props:
        fullData - полные данные
        sorting - функция обновления данных для сортировки
*/
const Sort = (props) => {
    const columns = Object.keys(props.fullData[0]);

    const handleSort = (event) => {
        event.preventDefault();

        const sortFields = [
            {
                field: event.target.fieldFirst.value,
                desc: event.target.descFirst.checked
            },
            {
                field: event.target.fieldSecond.value,
                desc: event.target.descSecond.checked
            },
            {
                field: event.target.fieldThird.value,
                desc: event.target.descThird.checked
            }
        ];

        let arr = [...props.fullData];

        arr.sort((a, b) => {
            for (const item of sortFields) {
                let firstValue = a[item.field];
                let secondValue = b[item.field];

                if (typeof firstValue === "string") {
                    firstValue = firstValue.toLowerCase();
                }

                if (typeof secondValue === "string") {
                    secondValue = secondValue.toLowerCase();
                }

                if (firstValue < secondValue) {
                    return item.desc ? 1 : -1;
                }

                if (firstValue > secondValue) {
                    return item.desc ? -1 : 1;
                }
            }

            return 0;
        });

        props.sorting(arr);
    };

    const handleReset = () => {
        props.sorting(props.fullData);
    };

    return (
        <form className="card card-soft p-3 table-page__card" onSubmit={handleSort} onReset={handleReset}>
            <div className="row g-3">
                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsFirst">Первичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldFirst"
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            name="descFirst"
                            type="checkbox"
                        />
                        <label className="form-check-label" htmlFor="fieldsFirstDesc">По убыванию</label>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsSecond">Вторичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldSecond"
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            id="fieldsSecondDesc"
                            type="checkbox"
                        />
                        <label className="form-check-label" htmlFor="fieldsSecondDesc">По убыванию</label>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <label className="form-label fw-semibold" htmlFor="fieldsThird">Третичная сортировка:</label>
                    <select
                        className="form-select"
                        name="fieldThird"
                    >
                        <option value="">Не выбрано</option>
                        {columns.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <div className="form-check form-check-inline mt-2">
                        <input
                            className="form-check-input"
                            name="descThird"
                            type="checkbox"
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
