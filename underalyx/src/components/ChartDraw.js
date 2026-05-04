import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";

const ChartDraw = (props) => {
    const chartRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        const rect = chartRef.current.getBoundingClientRect();

        setWidth(rect.width || parseFloat(svg.style("width")) || 800);
        setHeight(rect.height || parseFloat(svg.style("height")) || 400);
    }, []);

    const margin = {
        top: 20,
        bottom: 80,
        left: 60,
        right: 20
    };

    const boundsWidth = width - margin.left - margin.right;
    const boundsHeight = height - margin.top - margin.bottom;

    const series = useMemo(() => {
        let arr = [];

        if (props.oy[0]) {
            arr.push({
                index: 0,
                color: "red",
                className: "duration",
                title: "Продолжительность"
            });
        }

        if (props.oy[1]) {
            arr.push({
                index: 1,
                color: "blue",
                className: "performance",
                title: "Производительность"
            });
        }

        return arr;
    }, [props.oy]);

    const allValues = props.data.flatMap(d =>
        series.map(item => d.values[item.index])
    );

    let [min, max] = d3.extent(allValues);

    if (min === undefined || max === undefined) {
        min = 0;
        max = 1;
    }

    if (min === max) {
        min = min * 0.85;
        max = max * 1.1 || 1;
    }

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

        if (width === 0 || height === 0 || boundsWidth <= 0 || boundsHeight <= 0) {
            return;
        }

        if (props.data.length === 0) {
            svg
                .append("text")
                .attr("x", margin.left)
                .attr("y", margin.top + 20)
                .attr("fill", "white")
                .text("Нет данных для построения графика");

            return;
        }

        const xAxis = d3.axisBottom(scaleX);
        const yAxis = d3.axisLeft(scaleY);

        svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-45)");

        svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(yAxis);

        if (props.error) {
            return;
        }

        if (props.chartType === "bar") {
            const chartHeight = boundsHeight;
            const singleBarWidth = Math.max(6, scaleX.bandwidth() * 0.55);
            const doubleBarWidth = Math.max(4, scaleX.bandwidth() / 2 - 4);

            series.forEach((item, index) => {
                svg
                    .selectAll(`.bar-${item.className}`)
                    .data(props.data)
                    .enter()
                    .append("rect")
                    .attr("class", `bar-${item.className}`)
                    .attr("x", d => {
                        if (series.length === 2) {
                            return scaleX(d.labelX) + (index === 0 ? 2 : scaleX.bandwidth() / 2 + 2);
                        }

                        return scaleX(d.labelX) + (scaleX.bandwidth() - singleBarWidth) / 2;
                    })
                    .attr("y", d => scaleY(d.values[item.index]))
                    .attr("width", series.length === 2 ? doubleBarWidth : singleBarWidth)
                    .attr("height", d => chartHeight - scaleY(d.values[item.index]))
                    .attr("transform", `translate(${margin.left}, ${margin.top})`)
                    .style("fill", item.color);
            });
        }

        if (props.chartType === "dot") {
            series.forEach((item, index) => {
                svg
                    .selectAll(`.dot-${item.className}`)
                    .data(props.data)
                    .enter()
                    .append("circle")
                    .attr("class", `dot-${item.className}`)
                    .attr("r", 6)
                    .attr("cx", d => {
                        let x = scaleX(d.labelX) + scaleX.bandwidth() / 2;

                        if (series.length === 2 && index === 1) {
                            x += 6;
                        }

                        return x;
                    })
                    .attr("cy", d => scaleY(d.values[item.index]))
                    .attr("transform", `translate(${margin.left}, ${margin.top})`)
                    .style("fill", item.color);
            });
        }
    }, [
        props.data,
        props.chartType,
        props.error,
        series,
        scaleX,
        scaleY,
        width,
        height,
        boundsWidth,
        boundsHeight
    ]);

    return (
        <svg ref={chartRef} className="chart-svg"> </svg>
    );
};

export default ChartDraw;
