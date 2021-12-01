import { Meta, Story } from '@storybook/react';
import { Input, IInputProps } from './Input';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

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
  placeholder: 'Vasya',
};

// export const PrimaryWithIcon = Template.bind({});
// PrimaryWithIcon.args = {
//   leftIcon: <SearchIcon />,
// };

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
