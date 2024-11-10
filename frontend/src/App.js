import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Student from './Components/Student';
import CreateStudent from './Components/CreateStudent';
import UpdateStudent from './Components/UpdateStudent';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />}></Route>
        <Route path="/create" element={<CreateStudent />}></Route>
        <Route path="/update/:ID" element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
