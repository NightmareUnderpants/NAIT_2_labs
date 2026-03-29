document.addEventListener("DOMContentLoaded", function() {
    drawGraph(games);
});

document.addEventListener("DOMContentLoaded", function() {
    const chartSettings = document.getElementById("chartSettings");
    const buildBtn = document.getElementById("buildBtn");

    const durationSeries = chartSettings.querySelector("#duration_series");
    const performanceSeries = chartSettings.querySelector("#performance_series");
    const chartType = chartSettings.querySelector("#chart_type");

    buildBtn.addEventListener("click", function(event) {
        event.preventDefault();

        const xAxis = chartSettings.querySelector("input[name='x_axis']:checked");

        let selectedChart = 0;

        if (durationSeries.checked && performanceSeries.checked) {
            selectedChart = 2;
        } else if (durationSeries.checked && !performanceSeries.checked) {
            selectedChart = 0;
        } else if (!durationSeries.checked && performanceSeries.checked) {
            selectedChart = 1;
        } else {
            clearGraph();
            return;
        }

        clearGraph();
        drawGraph(games, selectedChart, xAxis.value, chartType.value);
    });
});
