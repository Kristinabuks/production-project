import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

interface BugButtonProps {
    className?: string
}

// Компонент для тестирования ErrorBoundary
export const BugButton: React.FC<BugButtonProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const onThrow = (): void => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={onThrow} className={classNames('', {}, [className ?? ''])}>
            {t('Создать ошибку')}
        </Button>
    )
}
