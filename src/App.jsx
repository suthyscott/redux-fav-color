import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './Landing';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
