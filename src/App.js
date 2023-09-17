import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    useLocation,
} from 'react-router-dom'
import Home from './pages/home/index'
const Home1 = () => {
    return (
        <div>
            <ul>
                <li>HOME</li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
        </div>
    )
}
const About = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <div>
            <button onClick={onClick}>BACK</button>
        </div>
    )
}

const Child1 = () => {
    return <div>Child1</div>
}
const Child2 = () => {
    return <div>Child2</div>
}

const List = () => {
    return (
        <div>
            list 頁面
            <Menus1 />
            <Container />
        </div>
    )
}
const Container = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
const Menus1 = () => {
    return (
        <div>
            <Link to={'/list/child1'}> one </Link>
            <Link to={'/list/child2'}> two </Link>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<Home />} path={'/home'}></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<List />} path='/list'>
                        <Route element={<Child1 />} path='/list/child1'></Route>
                        <Route element={<Child2 />} path='/list/child2'></Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App