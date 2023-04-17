import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navpanel from './components/Navpanel';
import Main from './pages/Main';

function App() {

  return (
    <div className={'App'} >
        <Navpanel />
        <Router>
          <Routes>
            <Route path='/dom-rf' element={<Main />}/>
            <Route path='*' element={<Navigate to={'/dom-rf'} replace/> } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
