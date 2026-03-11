import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description:
      'This is a description of the card. It provides supporting information for the title above.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    imageUrl: 'https://picsum.photos/seed/storybook/400/200',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title Only Card',
  },
};

export const LongDescription: Story = {
  args: {
    title: 'Detailed Card',
    description:
      'This card has a longer description to demonstrate how text wraps within the card component. It should remain readable and well-spaced regardless of content length.',
  },
};
