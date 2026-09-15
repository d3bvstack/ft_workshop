import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';

const meta = {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    logoLabel: {
      control: 'text',
      description: 'Label for the logo component',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    buttonLabel: {
      control: 'text',
      description: 'Text for the right-side button',
    },
  },
  args: {
    logoLabel: 'ftLogo',
    searchPlaceholder: 'Search Books',
    buttonLabel: 'Action',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabels: Story = {
  args: {
    logoLabel: 'MyApp',
    searchPlaceholder: 'Find anything...',
    buttonLabel: 'Get Started',
  },
};
