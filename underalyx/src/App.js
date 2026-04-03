//import logo from './logo.svg';

import './css/App.css';

import games from './tableData.js';
import Table from './components/Table.js';

function App() {
  return (
    <div className="App">
      <div className="container my-4">
        <h1 className="text-center">Табличные данные</h1>
        
        <h3 className="text-center mt-4">Данные отдельных пользователей</h3>
        
        <div className="table-responsive mt-3">
          <Table data={games} isPagination={true} amountRows={15} />
        </div>
      </div>
    </div>
  );
}

export default App;
