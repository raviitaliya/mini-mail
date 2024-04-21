import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Dashbord from "./components/Dashbord";
import NewDomain from "./components/NewDomain";

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route path="/new" element={<NewDomain />} />
    </Routes>
  </Router>
  );
}

export default App;
