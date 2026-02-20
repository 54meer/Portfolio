import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from "./components/layout/Layout"
import Home from "./components/home/Home"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default App;