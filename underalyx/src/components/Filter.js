/*
    компонент для фильтрации таблицы
    props:
        fullData - полные данные
        filtering - функция обновления данных для фильтрации
*/
const Filter = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const filterField = {
            "ID": [
                event.target.idFrom.value,
                event.target.idTo.value
            ],
            "Игра": event.target.game.value.toLowerCase(),
            "Продолжительность": [
                event.target.durationFrom.value,
                event.target.durationTo.value
            ],
            "Производительность": [
                event.target.performanceFrom.value,
                event.target.performanceTo.value
            ],
            "Версия": event.target.version.value.toLowerCase()
        };

        let arr = props.fullData;

        const textFields = ["Игра", "Версия"];
        const numberFields = ["ID", "Продолжительность", "Производительность"];

        textFields.forEach((key) => {
            if (filterField[key] !== "") {
                arr = arr.filter((item) =>
                    String(item[key]).toLowerCase().includes(filterField[key])
                );
            }
        });
        numberFields.forEach((key) => {
            const [minValue, maxValue] = filterField[key];

            if (minValue !== "") {
                arr = arr.filter((item) => Number(item[key]) >= Number(minValue));
            }

            if (maxValue !== "") {
                arr = arr.filter((item) => Number(item[key]) <= Number(maxValue));
            }
        });

        props.filtering(arr);
    };

    const handleReset = () => {
        props.reset();
    };

    return (
        <form className="card card-soft p-3" id="filter" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <label className="form-label fw-semibold" htmlFor="id">ID</label>
              <input className="form-control" type="number" name="idFrom" placeholder="например: 3"></input>
              <input className="form-control" type="number" name="idTo" placeholder="например: 8"></input>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <label className="form-label fw-semibold" htmlFor="performance">Производительность</label>
              <input className="form-control" type="number" name="performanceFrom" placeholder="например: 170"></input>
              <input className="form-control" type="number" name="performanceTo" placeholder="например: 200"></input>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <label className="form-label fw-semibold" htmlFor="duration">Продолжительность (мин)</label>
              <input className="form-control" type="number" name="durationFrom" placeholder="например: 20"></input>
              <input className="form-control" type="number" name="durationTo" placeholder="например: 90"></input>
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label fw-semibold" htmlFor="game">Игра</label>
              <input className="form-control" type="text" name="game" placeholder="например: PERCEPTUAL"></input>
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label fw-semibold" htmlFor="version">Версия</label>
              <input className="form-control" type="text" name="version" placeholder="например: beta"></input>
            </div>
          </div>
          <div className="mt-3 d-flex gap-2 flex-wrap">
            <button className="btn btn-outline-light" type="submit" id="findBtn">Применить фильтры</button>
            <button className="btn btn-outline-secondary" type="reset" id="resetFilterBtn">Сбросить все фильтры</button>
          </div>
        </form>
    );
};

export default Filter;
