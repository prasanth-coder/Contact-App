import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserContextProvider} from "./context/UserContext"
import EditContact from './components/EditContact';
import CreateContact from './components/CreateContact';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home'

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/edit" element={<EditContact />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App;
