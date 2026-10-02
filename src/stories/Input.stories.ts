import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'search'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello world',
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Enter text...',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Enter text...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Enter text...',
  },
};
