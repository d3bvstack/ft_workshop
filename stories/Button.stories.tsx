import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from 'storybook/test';
import { Plus, Trash2, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/Button';

// 1. Define icon dictionary
const icons = {
  None: null,
  Plus: <Plus />,
  ArrowRight: <ArrowRight />,
  Mail: <Mail />,
  Trash: <Trash2 />,
};

type IconKey = keyof typeof icons;

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon-sm', 'icon-md', 'icon-lg'],
    },
    startIcon: {
      options: Object.keys(icons) as IconKey[],
      mapping: icons,
      control: {
        type: 'select',
      },
      description: 'Icon element displayed before the button text',
    },
    endIcon: {
      options: Object.keys(icons) as IconKey[],
      mapping: icons,
      control: {
        type: 'select',
      },
      description: 'Icon element displayed after the button text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button interactions',
    },
    focusableWhenDisabled: {
      control: 'boolean',
      description: 'Keeps button focusable when disabled (Base UI feature)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type IconButtonStory = StoryObj<
  React.ComponentProps<typeof Button> & {
    icon: IconKey;
    'aria-label': string;
  }
>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
  parameters: { docs: { description: { story: 'Primary button variant' } } },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
  parameters: { docs: { description: { story: 'Secondary button variant' } } },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
  parameters: { docs: { description: { story: 'Outline button variant' } } },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
  parameters: { docs: { description: { story: 'Ghost button variant' } } },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
  parameters: { docs: { description: { story: 'Destructive button variant' } } },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Link' },
  parameters: { docs: { description: { story: 'Link button variant' } } },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Create Invoice',
    startIcon: 'Plus',
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Next Step',
    endIcon: 'Trash',
    variant: 'destructive',
  },
};

export const IconButton: IconButtonStory = {
  args: {
    variant: 'destructive',
    size: 'icon-lg',
    icon: 'Trash',
    'aria-label': 'Delete entry',
  },
  argTypes: {
    // Restrict size options to icon-only sizes
    size: {
      control: 'select',
      options: ['icon-sm', 'icon-md', 'icon-lg'],
    },
    icon: {
      control: 'select',
      options: Object.keys(icons) as IconKey[],
      mapping: icons,
      description: 'The icon element to render inside the button',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible screen-reader label (Required for icon buttons)',
    },
    children: {
      table: { disable: true },
    },
    startIcon: {
      table: { disable: true },
    },
    endIcon: {
      table: { disable: true },
    },
  },

  render: ({ icon, ...args }) => <Button {...args}>{icon}</Button>,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button', {
      name: new RegExp(args['aria-label'], 'i'),
    });
    await expect(button).toBeInTheDocument();
  },
};

export const FocusableWhenDisabled: Story = {
  args: {
    children: 'Disabled but Focusable',
    disabled: true,
    focusableWhenDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Verify it stays in the keyboard navigation order
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await expect(button).toHaveAttribute('data-disabled');
  },
};
