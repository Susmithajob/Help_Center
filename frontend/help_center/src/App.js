import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage';
import AddCard from './Screens/AddCard';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cards" element={<AddCard/>}></Route>
          
                  
        </Routes>
      </Router>

    </div >
  );
}

export default App;
