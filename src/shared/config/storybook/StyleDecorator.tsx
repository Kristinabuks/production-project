import 'app/styles/index.scss'

export const StyleDecorator = (Story: any): JSX.Element => (
    <div>
        <Story />
    </div>
)
