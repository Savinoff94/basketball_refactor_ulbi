import './index.scss'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import AboutPage from '../pages/AboutPage/AboutPage';
import { AboutPageAsync } from '../pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from '../pages/MainPage/MainPageAsync';
import MainPage from '../pages/MainPage/MainPage';
const App = () => {
    return (
        <div>
            <Link to={'/'}>MainPage</Link>
            <Link to={'about'}>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;