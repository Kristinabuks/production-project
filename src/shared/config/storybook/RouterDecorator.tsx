import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: any): JSX.Element => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
