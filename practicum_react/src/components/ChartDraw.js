import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";

const ChartDraw = (props) => {
    const chartRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const svg = d3.select(chartRef.current);

        setWidth(parseFloat(svg.style("width")));
        setHeight(parseFloat(svg.style("height")));
    }, []);

    const margin = {
        top: 10,
        bottom: 60,
        left: 40,
        right: 10
    };

    const boundsWidth = width - margin.left - margin.right;
    const boundsHeight = height - margin.top - margin.bottom;

    const series = [];

    if (props.oy[0]) {
        series.push({
            index: 1,
            color: "red"
        });
    }

    if (props.oy[1]) {
        series.push({
            index: 0,
            color: "blue"
        });
    }

    let allValues = [];

    for (let item of props.data) {
        for (let s of series) {
            allValues.push(item.values[s.index]);
        }
    }

    let [min, max] = d3.extent(allValues);

    const scaleX = useMemo(() => {
        return d3
            .scaleBand()
            .domain(props.data.map(d => d.labelX))
            .range([0, boundsWidth])
            .padding(0.2);
    }, [props.data, boundsWidth]);

    const scaleY = useMemo(() => {
        return d3
            .scaleLinear()
            .domain([min * 0.85, max * 1.1])
            .range([boundsHeight, 0]);
    }, [boundsHeight, min, max]);

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();

        if (width === 0 || height === 0) {
            return;
        }

        if (props.data.length === 0) {
            svg
                .append("text")
                .attr("x", margin.left)
                .attr("y", margin.top + 20)
                .text("Нет данных для построения графика");

            return;
        }

        const xAxis = d3.axisBottom(scaleX);

        svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", d => "rotate(-30)");

        const yAxis = d3.axisLeft(scaleY);

        svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(yAxis);

        if (props.chartType === "Точечная диаграмма") {
            for (let i = 0; i < series.length; i++) {
                svg
                    .selectAll(`.dot-${i}`)
                    .data(props.data)
                    .enter()
                    .append("circle")
                    .attr("r", 5)
                    .attr("cx", d => {
                        let x = scaleX(d.labelX) + scaleX.bandwidth() / 2;

                        if (series.length === 2) {
                            x += i === 0 ? -4 : 4;
                        }

                        return x;
                    })
                    .attr("cy", d => scaleY(d.values[series[i].index]))
                    .attr("transform", `translate(${margin.left}, ${margin.top})`)
                    .style("fill", series[i].color);
            }
        }

        if (props.chartType === "Гистограмма") {
            const scaleSeries = d3
                .scaleBand()
                .domain(series.map((d, i) => i))
                .range([0, scaleX.bandwidth()])
                .padding(0.1);

            for (let i = 0; i < series.length; i++) {
                svg
                    .selectAll(`.bar-${i}`)
                    .data(props.data)
                    .enter()
                    .append("rect")
                    .attr("x", d => {
                        return margin.left +
                            scaleX(d.labelX) +
                            scaleSeries(i);
                    })
                    .attr("y", d => {
                        return margin.top +
                            scaleY(d.values[series[i].index]);
                    })
                    .attr("width", scaleSeries.bandwidth())
                    .attr("height", d => {
                        return boundsHeight -
                            scaleY(d.values[series[i].index]);
                    })
                    .style("fill", series[i].color);
            }
        }
    }, [
        scaleX,
        scaleY,
        props.data,
        props.chartType,
        width,
        height,
        boundsHeight,
        series
    ]);

    return (
        <svg ref={chartRef}> </svg>
    );
};

export default ChartDraw;