import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeDark from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme }= useTheme();

    return (
        <button 
            className={classNames(cls.ThemeSwitcher, {}, [className])} 
            onClick={toggleTheme}
        >
            TOGGLE
            <ThemeDark />
        </button>
 );
}