document.addEventListener("DOMContentLoaded", function() {
    showTable("build", buildings);

    const tableBtn = document.getElementById("tableBtn");

    tableBtn.addEventListener("click", function() {
        const isHide = tableBtn.value === "Скрыть таблицу";

        if (isHide) {
            tableBtn.value = "Показать таблицу";
            clearTable("build");
        } else {
            tableBtn.value = "Скрыть таблицу";
            showTable("build", buildings);
        }
    });
});
