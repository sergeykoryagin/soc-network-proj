import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="content-wrapper">
                    <Navbar/>
                    <div className="app-content">
                        <Route path={'/profile'}
                               render={() =>
                                   <Profile
                                       profilePage={props.state.profilePage}
                                       dispatch={props.dispatch}
                                   />}
                        />
                        <Route path={'/dialogs'}
                               render={() =>
                                   <Dialogs
                                       dialogPage={props.state.dialogPage}
                                       dispatch={props.dispatch}
                                   />}
                        />
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
