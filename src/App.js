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
            <Route path='/dom-rf-demo' element={<Main />}/>
            <Route path='*' element={<Navigate to={'/dom-rf-demo'} replace/> } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
