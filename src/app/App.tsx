import './styles/index.scss'
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';


const App = () => {

    const {theme, toggleTheme}= useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>MainPage</Link>
            <Link to={'about'}>AboutPage</Link>
            <AppRouter/>
        </div>
    )
}

export default App;