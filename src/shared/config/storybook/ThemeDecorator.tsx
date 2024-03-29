import { type Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: any): JSX.Element => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)
