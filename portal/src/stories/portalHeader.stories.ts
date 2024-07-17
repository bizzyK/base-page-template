import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/testing-library';
import { Navbar } from '../components/navbar/Navbar'; // Adjust the import path as needed

// Default export with metadata
const meta: Meta<typeof Navbar> = {
  title: 'Example/Navbar', // Adjust the title as needed
  component: Navbar,
  parameters: {
    // Add any global parameters here
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

// Template for the component
const Template: Story = (args) => <Navbar {...args} />;

// Define variations of the component
export const Default: Story = {
  args: {
    // Define your component props here
  },
};

// Example of adding interactions
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button');
  await userEvent.click(button);
  await expect(button).toHaveTextContent('Clicked');
};
