import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './Landing';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
