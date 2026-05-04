import { useState } from "react";
import * as d3 from "d3";
import ChartDraw from "./ChartDraw.js";

const Chart = (props) => {
    const [ox, setOx] = useState("Версия");
    const [oy, setOy] = useState([true, false]);
    const [chartType, setChartType] = useState("dot");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newOy = [
            event.target["oy"][0].checked,
            event.target["oy"][1].checked
        ];

        setOx(event.target["ox"].value);
        setOy(newOy);
        setChartType(event.target["chartType"].value);

        if (!newOy[0] && !newOy[1]) {
            setError("Выберите хотя бы одно значение");
        } else {
            setError("");
        }
    };

    const createArrGraph = (data, key) => {
        const groupObj = d3.group(data, d => d[key]);
        let arrGraph = [];

        for (let entry of groupObj) {
            const avgDuration = d3.mean(entry[1], d => d["Продолжительность"]);
            const avgPerformance = d3.mean(entry[1], d => d["Производительность"]);

            arrGraph.push({
                labelX: entry[0],
                values: [avgDuration, avgPerformance]
            });
        }

        if (key === "ID") {
            arrGraph.sort((a, b) => a.labelX - b.labelX);
        }

        return arrGraph;
    };

    return (
        <div className="card card-soft p-3 mb-4 chart-card">
            <h3 className="text-center">Визуализация данных</h3>

            <form id="chartSettings" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-12 col-lg-4">
                        <p className="form-label fw-semibold">Значение по оси OX:</p>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="ox"
                                value="Версия"
                                defaultChecked={ox === "Версия"}
                            />
                            <label className="form-check-label">Версия</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="ox"
                                value="Игра"
                                defaultChecked={ox === "Игра"}
                            />
                            <label className="form-check-label">Игра</label>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <p className="form-label fw-semibold">Значение по оси OY:</p>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="oy"
                                defaultChecked={oy[0] === true}
                            />
                            <label className="form-check-label">Продолжительность</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="oy"
                                defaultChecked={oy[1] === true}
                            />
                            <label className="form-check-label">Производительность</label>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <label className="form-label fw-semibold" htmlFor="chartType">Тип диаграммы:</label>
                        <select className="form-select" name="chartType" defaultValue={chartType}>
                            <option value="dot">Точечная диаграмма</option>
                            <option value="bar">Гистограмма</option>
                        </select>
                    </div>
                </div>

                <div className="mt-3 d-flex gap-2 flex-wrap">
                    <button className="btn btn-outline-light" type="submit" id="buildBtn">
                        Построить
                    </button>
                </div>
            </form>

            {error !== "" && <p className="text-danger mt-3">{error}</p>}

            <ChartDraw
                data={createArrGraph(props.data, ox)}
                oy={oy}
                chartType={chartType}
                error={error !== ""}
            />
        </div>
    );
};

export default Chart;
