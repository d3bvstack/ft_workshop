import type { Meta, StoryObj } from '@storybook/react';
import { Portrait } from '../components/Portrait';

const meta = {
  title: 'Portrait',
  component: Portrait,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    src: 'https://picsum.photos/seed/portrait/200/200',
    alt: 'Portrait image',
  },
} satisfies Meta<typeof Portrait>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};
