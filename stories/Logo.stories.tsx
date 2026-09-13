import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../components/Logo';

const meta = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    label: 'Logo',
    variant: 'both',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['iconOnly', 'typeOnly', 'both'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Both: Story = {
  args: { variant: 'both' },
};

export const IconOnly: Story = {
  args: { variant: 'iconOnly' },
};

export const TypeOnly: Story = {
  args: { variant: 'typeOnly' },
};
