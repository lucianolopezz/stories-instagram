import React from 'react';

import { MdCloudDone, MdHighlightOff } from 'react-icons/md';
import { CircularProgressbar } from 'react-circular-progressbar';

import {
  Container,
  FileInfo,
  Preview,
} from './styles';

const FileList = ({ files, onDelete }) =>(
  <Container>
    {files.map((uploadedFile, index) => (
      <li key={index}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            {uploadedFile.uploaded && <a onClick={() => onDelete(uploadedFile.id)}>Excluir</a>}
          </div>
        </FileInfo>
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error &&
            (<CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#27AE60' }
              }}
              strokeWidth={10}
              value={uploadedFile.progress}
            />)}

            {uploadedFile.uploaded && <MdCloudDone size={20} color="#27AE60" />}
            {uploadedFile.error && <MdHighlightOff size={20} color="red" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;