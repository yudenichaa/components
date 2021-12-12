import styles from './file-input.module.scss';
import classnames from 'classnames/bind';
import { useCallback, useRef, useState } from 'react';
import { ReactComponent as UploadIcon } from 'assets/icons/upload.svg';
import { ReactComponent as SwitchIcon } from 'assets/icons/switch.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { Button } from 'components';

const cn = classnames.bind(styles);

type FileInputError = 'FileSizeExceeded' | 'InvalidMimeType';

export interface IFileInputProps {
  maxFileSize?: number;
  allowedMimeTypes?: string;
  onFileChange: (file?: File) => void;
  onError: (errorType: FileInputError) => void;
}

// prevent file change on drop if error?

export const FileInput = ({
  maxFileSize,
  allowedMimeTypes,
  onFileChange,
  onError,
}: IFileInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();

  const handleFileChange = useCallback(() => {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    const fileList = fileInputRef.current.files;
    if (!fileList) return;

    const file = fileList[0];

    if (allowedMimeTypes) {
      const mimeTypes = allowedMimeTypes
        .split(',')
        .map((value) => value.trim())
        .filter((value) => value);
      if (!mimeTypes.includes(file.type)) {
        onError('InvalidMimeType');
        return;
      }
    }

    if (maxFileSize && file.size > maxFileSize) {
      onError('FileSizeExceeded');
      return;
    }

    setFile(file);
    onFileChange(file);
  }, [allowedMimeTypes, maxFileSize, onError, onFileChange]);

  const handleDropFile = useCallback(() => {}, []);

  const handleRemoveFile = useCallback(() => {}, []);

  return (
    <div className={cn('file-input')}>
      <label className={cn('file-input__label')}>
        {file ? file.name : 'Choose file'}
        <input
          className={cn('file-input__field')}
          ref={fileInputRef}
          type="file"
          accept={allowedMimeTypes}
          onChange={handleFileChange}
          onDrop={handleDropFile}
        />
      </label>
      <div
        className={cn('file-input__controls', {
          'file-input__controls_file-uploaded': file,
        })}
      >
        <Button
          size="small"
          tabIndex={-1}
          icon={file ? <SwitchIcon /> : <UploadIcon />}
        >
          {file ? 'Replace' : 'Upload'}
        </Button>
        {file && (
          <Button
            className={cn('file-input__remove-button')}
            onClick={handleRemoveFile}
            variant="danger-outlined"
            size="small"
            icon={<TrashIcon />}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};
