import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './component/pages/start/Start';
import BackgroundSelector from './component/pages/fontSelector/BackgroundSelector';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
      <Routes>
          <Route path="/" element={<Start/> } />
          <Route path="start" element={<Start />} />
          <Route path="backgroundSelector" element={<BackgroundSelector />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
