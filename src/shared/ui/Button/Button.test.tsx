import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
    test('in the document', () => {
        render(<Button>TEST</Button>)
        screen.debug()
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('with Theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
