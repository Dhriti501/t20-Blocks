import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamSelection from './components/TeamSelection';
import ViewTeam from './components/ViewTeam';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/create-team' element={<TeamSelection />} />
                    <Route exact path='/view-team' element={<ViewTeam />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
