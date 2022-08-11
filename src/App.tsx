import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter, Link } from "react-router-dom";
import StudentDashBoard from './pages/StudentDashBoard';

import StudentInfo from './pages/StudentInfo';
import TeacherDashBoard from './pages/TeacherDashBoard';
import TeacherInfo from './pages/TeacherInfo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav style={{display: 'flex', color: 'white'}}>
        <div style={{marginRight: '12px'}}><Link to="/student">Students</Link></div>
        <div><Link to="/teacher">Teachers</Link></div>
      </nav>
      <Routes>
        <Route path="/" element={<StudentDashBoard/>} />
        <Route path="/student" element={<StudentDashBoard/>} />
        <Route path="/student/:id" element={<StudentInfo/>} />
        <Route path="/teacher" element={<TeacherDashBoard/>} />
        <Route path="/teacher/:id" element={<TeacherInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
