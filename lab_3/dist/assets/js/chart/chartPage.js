document.addEventListener("DOMContentLoaded", function() {
    drawGraph(games);
});

document.addEventListener("DOMContentLoaded", function() {
    const chartSettings = document.getElementById("chartSettings");
    const buildBtn = document.getElementById("buildBtn");

    const durationSeries = chartSettings.querySelector("#duration_series");
    const performanceSeries = chartSettings.querySelector("#performance_series");
    const chartType = chartSettings.querySelector("#chart_type");

    const err = chartSettings.querySelector("#errMessage");

    buildBtn.addEventListener("click", function() {
        const xAxis = chartSettings.querySelector("input[name='x_axis']:checked");

        let selectedChart = 0;

        if (durationSeries.checked && performanceSeries.checked) {
            selectedChart = 2;
        } else if (durationSeries.checked && !performanceSeries.checked) {
            selectedChart = 0;
        } else if (!durationSeries.checked && performanceSeries.checked) {
            selectedChart = 1;
        } else {
            showErr(err);
            drawGraph(games, selectedChart, undefined, undefined, true);
            return;
        }

        clearGraph();
        drawGraph(games, selectedChart, xAxis.value, chartType.value);
    });

    durationSeries.addEventListener("change", function() {
        clearErr(chartSettings);
    });
    performanceSeries.addEventListener("change", function() {
        clearErr(chartSettings);
    });
});

function showErr(err) {
    err.insertAdjacentHTML("afterbegin", "<p class=\"text-danger mt-2\">Выберите хотя бы одно значение</p>");
}

function clearErr(chartSettings) {
    var errMessage = chartSettings.querySelector(".text-danger");
    if (errMessage)
        errMessage.remove();
}