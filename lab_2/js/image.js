function drawPentagram(svg) {
    let star = svg.append("g")
        .style("stroke", "brown")
        .style("stroke-width", 2)
        .style("fill", "none");

    let r = 50;
    let points = [];

    for (let i = 0; i < 5; i++) {
        let angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle);
        points.push([x, y]);
    }

    let order = [0, 2, 4, 1, 3, 0];
    let starPoints = [];

    for (let i = 0; i < order.length; i++) {
        starPoints.push(points[order[i]]);
    }

    let line = d3.line();

    // внешний круг
    star.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", r)
        .style("fill", "none");

    // пентаграмма
    star.append("path")
        .attr("d", line(starPoints));

    // круги на концах
    points.forEach(([x, y]) => {
        star.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 5)
            .style("fill", "lightgray");
    });

    return star;
}
