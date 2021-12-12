import { Meta, Story } from '@storybook/react';
import { Input, IInputProps } from './Input';

export default {
  component: Input,
  title: 'Lego/Atoms/Input',
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IInputProps> = ({ children, ...args }) => (
  <Input {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryWithPlaceholder = Template.bind({});
PrimaryWithPlaceholder.args = {
  placeholder: 'Hello world',
};

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
  label: 'Hello world',
};

export const PrimaryWithLabelAndPlaceholder = Template.bind({});
PrimaryWithLabelAndPlaceholder.args = {
  label: 'Hello world',
  placeholder: 'Placeholder',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const FilledWithPlaceholder = Template.bind({});
FilledWithPlaceholder.args = {
  placeholder: 'Hello world',
  variant: 'filled',
};

export const FilledWithLabel = Template.bind({});
FilledWithLabel.args = {
  label: 'Hello world',
  variant: 'filled',
};

export const FilledWithLabelAndPlaceholder = Template.bind({});
FilledWithLabelAndPlaceholder.args = {
  variant: 'filled',
  label: 'Hello world',
  placeholder: 'Type here',
};
