import { useState } from 'react';
// Import styled-components
import styled from 'styled-components';

// Import required actions.
import axios from '../../../../utils/axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 380px;
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  ::-webkit-file-upload-button {
    width: 130px;
    height: 30px;
    background-color: var(--principal-color);
    border-radius: 3px;
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 2px 0 var(--boring-color);
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.8rem;
    color: var(--light-color);
    text-decoration: none;
    border: none;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--principal-color);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 2px 0 var(--boring-color);
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 18px;
  color: var(--light-color);
  text-decoration: none;
  border: none;
  margin: 0 0rem;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--light-color);
  }
`;

function InputUpload({ setState }) {
  const [file, setFile] = useState(null);

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    const result = await axios.post('/api/uploads/file', formData);
    const { url } = result.data;
    setState(url);
  };

  return (
    <Container>
      <Input
        type="file"
        name="file"
        id="file"
        onChange={onChangeFile}
        accept="image/*"
        multiple
      />
      <Button type="submit" onClick={onSubmit}>
        Upload
      </Button>
    </Container>
  );
}

export default InputUpload;
