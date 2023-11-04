import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./component/Main";

function App() {

  return (
    <div className="App" style={{ backgroundColor: 'rgb(62 0 95)' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
