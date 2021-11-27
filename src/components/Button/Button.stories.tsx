import { Meta, Story } from '@storybook/react';
import { Button, IButtonProps } from './Button';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

export default {
  component: Button,
  title: 'Lego/Atoms/Button',
} as Meta;

const Template: Story<IButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button text',
  size: 'small',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Button text',
  size: 'large',
};

export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
  children: 'Button text',
  fullWidth: true,
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  children: 'Primary outlined',
  variant: 'primary-outlined',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button text',
  variant: 'danger',
};

export const DangerOutlined = Template.bind({});
DangerOutlined.args = {
  children: 'Button text',
  variant: 'danger-outlined',
};

export const Multiline = Template.bind({});
Multiline.args = {
  children: 'First line\nSecond line',
};

export const MultilineWithNewLineSymbol = () => (
  <Button>First line{'\n'}Second line</Button>
);

export const MultilineTextAlignStart = Template.bind({});
MultilineTextAlignStart.args = {
  children: 'First line\nSecond line',
  textAlign: 'start',
};

export const MultilineTextAlignEnd = Template.bind({});
MultilineTextAlignEnd.args = {
  children: 'First line\nSecond line',
  textAlign: 'end',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: 'With icon',
  icon: <SearchIcon />,
};

export const PrimarySmallWithIcon = Template.bind({});
PrimarySmallWithIcon.args = {
  children: 'Button text',
  size: 'small',
  icon: <SearchIcon />,
};

export const PrimaryLargeWithIcon = Template.bind({});
PrimaryLargeWithIcon.args = {
  children: 'Button text',
  size: 'large',
  icon: <SearchIcon />,
};

export const PrimaryFullWidthWithIcon = Template.bind({});
PrimaryFullWidthWithIcon.args = {
  children: 'Button text',
  fullWidth: true,
  icon: <SearchIcon />,
};

export const PrimaryFullWidthWithIconJustifyContentStart = Template.bind({});
PrimaryFullWidthWithIconJustifyContentStart.args = {
  children: 'Button text',
  fullWidth: true,
  icon: <SearchIcon />,
  justifyContent: 'start',
};

export const PrimaryFullWidthMultilineWithIconTextAlignStart = Template.bind(
  {}
);
PrimaryFullWidthMultilineWithIconTextAlignStart.args = {
  children: 'First line\nSecond line',
  fullWidth: true,
  icon: <SearchIcon />,
  textAlign: 'start',
};

export const PrimaryOutlinedWithIcon = Template.bind({});
PrimaryOutlinedWithIcon.args = {
  children: 'With icon',
  icon: <SearchIcon />,
  variant: 'primary-outlined',
};

export const PrimaryMultilineWithIcon = Template.bind({});
PrimaryMultilineWithIcon.args = {
  children: 'First line\nSecond line',
  icon: <SearchIcon />,
};
