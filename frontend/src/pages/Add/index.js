import React, { useState, useCallback } from 'react';

import FileList from './components/FileList';
import { useDropzone } from 'react-dropzone';
import { MdKeyboardBackspace } from "react-icons/md";
import api from '../../services/api';

import {
  Container,
  Header,
  Form,
  DropContainer,
} from './styles';

export default function Add() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const onDrop = useCallback(onUpload, []);
  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({onDrop});

  function updateFile(id, data) {
    setUploadedFiles(uploadedFiles => uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
    }));
  }

  function processUpload(uploadedFile) {
    const data = new FormData();
    data.append('image', uploadedFile.file, uploadedFile.name);

    api.post('/stories', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));        
        updateFile(uploadedFile.id, { progress });
      }
    }).then(response => {
      console.log(response.data)
      updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
      });
    }).catch(() => {
      updateFile(uploadedFile.id, {
        error: true,
      });
    });
  }

  function onUpload(files) {
    const uploadeFiles = files.map((file, index) => ({
      file,
      id: index,
      name: file.name,
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,      
    }));

    setUploadedFiles(uploadedFiles => uploadedFiles.concat(uploadeFiles));

    uploadeFiles.forEach(processUpload);
  }

  async function handleDelete(_id) {    
    await api.delete(`/stories/${_id}`);
    setUploadedFiles(uploadedFiles => uploadedFiles.filter(file => file.id !== _id ));
  }

  return (
    <Container>
      <Header>
        <a href="/home"><MdKeyboardBackspace size={30} /></a> <span>Voltar</span>
      </Header>
      <Form>
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}>
            <input {...getInputProps()} />
            Selecione ou arraste fotos aqui...
        </DropContainer>
        {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
      </Form>
    </Container>
  );
}
