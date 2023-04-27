import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className, short } = props

    const { t, i18n } = useTranslation()

    const toggle = async (): Promise<void> => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className ?? ''])}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
