import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Test from './pages/Test';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/ibu" element={<Home />}/>
          <Route path="/ridho" element={<Home />}/>
          <Route path="/seila" element={<Home />}/>
          <Route path='/testing' element={<Test />}/>
        </Route>
      </Routes>
    </Router>
  );
}
