import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-content">
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Settings/>}/>
                    <Route path={'/settings'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
