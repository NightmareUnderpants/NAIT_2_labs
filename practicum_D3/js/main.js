document.addEventListener("DOMContentLoaded", function() {
    const dataForm = document.getElementById("setting");
    const drawBtn = dataForm.querySelector('input[type="button"]');
    drawBtn.addEventListener('click', () => {
        draw(dataForm);
    })
})

const draw = (dataForm) => {
    const svg = d3.select("svg")
    let pict = drawSmile(svg);
    pict.attr("transform", `translate(${dataForm.cx.value},
    ${dataForm.cy.value})`);
}
