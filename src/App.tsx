import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Panel from './pages/Panel';
import PuebloDetails from './pages/PuebloDetails';
import PuebloForm from './pages/PuebloForm';
import Pueblos from './pages/Pueblos';

const App: React.FC = () => {

  return (
    <div>
      <main className=''>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/panel' element={ <Panel /> } />
          <Route path='/pueblos/:puebloId' element={ <PuebloDetails /> } />
          <Route path='/pueblos' element={ <Pueblos /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
