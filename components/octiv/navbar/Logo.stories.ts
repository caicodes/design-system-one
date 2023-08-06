import type { Meta, StoryObj } from '@storybook/vue3'

import Logo from './Logo.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Octiv/Logo',
  component: Logo,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: <object>{
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: <object>{ primary: false }, // default value
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: <object>{
    primary: true,
    label: 'Logo',
  },
}

export const Secondary: Story = {
  args: <object>{
    primary: false,
    label: 'Logo',
  },
}

export const Large: Story = {
  args: <object>{
    label: 'Logo',
    size: 'large',
  },
}

export const Small: Story = {
  args: <object>{
    label: 'Logo',
    size: 'small',
  },
}
