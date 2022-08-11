import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter, Link } from "react-router-dom";
import StudentDashBoard from './pages/StudentDashBoard';

import StudentInfo from './pages/StudentInfo';
import TeacherInfo from './pages/TeacherInfo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/student">Students</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<StudentDashBoard/>} />
        <Route path="/student" element={<StudentDashBoard/>} />
        <Route path="/student/:id" element={<StudentInfo/>} />
        <Route path="/teacher/:id" element={<TeacherInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
