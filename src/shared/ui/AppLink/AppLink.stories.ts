import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/'
    }
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.SECONDARY
    }
}

export const Red: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.RED
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SecondaryDark: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const RedDark: Story = {
    args: {
        children: 'Hello',
        theme: AppLinkTheme.RED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
