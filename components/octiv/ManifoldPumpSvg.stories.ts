import type { Meta, StoryObj } from '@storybook/vue3'

import ManifoldPumpSvg from './ManifoldPumpSvg.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Octiv/ManifoldPumpSvg',
  component: ManifoldPumpSvg,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: <any>{
    engineType: { control: 'select', options: ['Zeus1', 'Zeus2', 'FB4k'] },
    manifoldPosition: { control: 'select', options: ['Left', 'Right'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: <any>{ positioned: false }, // default value
} satisfies Meta<typeof ManifoldPumpSvg>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: <object>{
    positioned: true,
    label: 'ManifoldPumpSvg',
  },
}

export const Secondary: Story = {
  args: <object>{
    positioned: false,
    label: 'ManifoldPumpSvg',
  },
}

export const Large: Story = {
  args: <object>{
    label: 'ManifoldPumpSvg',
    engineType: 'large',
  },
}

export const Small: Story = {
  args: <object>{
    label: 'ManifoldPumpSvg',
    engineType: 'small',
  },
}
