import { Meta, Story } from '@storybook/react';
import { FileInput, IFileInputProps } from './FileInput';

export default {
  component: FileInput,
  title: 'Lego/Atoms/FileInput',
  decorators: [
    (Story) => (
      <div
        style={{
          width: '320px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IFileInputProps> = (args) => <FileInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
