import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Maps from './screens/Evakuasi';
import CreateRoute from './screens/Evakuasi/CreateRoute';
import Signup from './screens/Signup';
import Sign from './screens/Sign';
import Landing from './screens/Landing';
import Topbar from './components/Topbar';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      {user && <Route path='/' exact element={<Home />} />}
      <Route path='/landing' exact element={<Landing />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/sign' exact element={<Sign />} />
      {user && <Route path='/evakuasi' exact element={<Maps />} />}
      {user && <Route path='/evakuasi/tambah-jalur' exact element={<CreateRoute />} />}
      <Route path='/' element={<Navigate replace to='/landing' />} />
    </Routes>
  );
}

export default App;
