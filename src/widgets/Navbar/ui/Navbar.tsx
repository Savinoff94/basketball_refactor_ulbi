import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { AppLinkTheme, Applink } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
    className ?: string
}

export const Navbar = ({className} : NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Applink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>MainPage</Applink>
                <Applink theme={AppLinkTheme.SECONDARY} to={'/about'}>AboutPage</Applink>
            </div>
            
        </div>
    )
}