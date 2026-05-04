import { useState } from "react";

import Chart from "./components/Chart.js";
import Table from "./components/Table.js";
import buildings from "./data.js";

function App() {
    const [dataChart, setDataChart] = useState(buildings);

    return (
        <div className="App">
            <h3>Самые высокие здания и сооружения</h3>

            <Chart data={dataChart} />

            <Table
                data={buildings}
                amountRows="10"
                isPagination={true}
                filtering={setDataChart}
            />
        </div>
    );
}

export default App;