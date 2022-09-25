import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import List from './components/List';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>React Coding Challenge</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<List />} />
            <Route path='read/*' element={<Read />} />
            <Route path='update/*' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

