import type { Meta, StoryObj } from '@storybook/react';
import { Cover } from '../components/Cover';

const meta = {
  title: 'Cover',
  component: Cover,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs','sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    src: 'https://picsum.photos/seed/cover/200/320',
    alt: 'Cover image',
  },
} satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: { size: 'xs' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};
