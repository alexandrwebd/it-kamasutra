import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
// Ленивая загрузка компонентов которые не нужны при первом старте обернув компонент в Suspense
const DialogsContainer = React.lazy(()=> import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=> import ('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path='dialogs' element={<DialogsContainer/>}/>
                            {/*<Route path='profile/:userId' element={<ProfileContainer/>}/>*/}
                            <Route path='profile/:userId' element={withSuspense(<ProfileContainer/>)}/>
                            <Route path='profile/*' element={<ProfileContainer/>}/>
                            <Route path='news' element={<News/>}/>
                            <Route path='music' element={<Music/>}/>
                            <Route path='settings' element={<Settings/>}/>
                            <Route path='users' element={<UsersContainer/>}/>
                            <Route path='login' element={<LoginPage/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>

        )
    }
}



const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)
const SamuraiJSApp = (props) => {
    return (
    <BrowserRouter>
        <Provider store={store} >
            <AppContainer state={store.getState()}/>
        </Provider>
    </BrowserRouter>)
}

export default SamuraiJSApp