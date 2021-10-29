/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Col, Container, FormGroup, Row, Button, Input } from 'reactstrap';
import '../../css/inputsForm.css';
import Logo from '../../utils/assets/LOGO.png';

const Index = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    img: [],
    description: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <form
            className="form-container container-fluid shadow m-0 p-4 col-sm-12 col-md-8 col-lg-6"
            onSubmit={handleSubmit}
          >
            <FormGroup className="pt-3 pb-3 mt-4 mb-4">
              <label htmlFor="name" className="d-flex flex-column">
                Nombre
                <Input
                  className="input-field"
                  type="text"
                  name="name"
                  id="name"
                  value={initialValues.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </label>
            </FormGroup>
            <FormGroup className="pt-3 pb-3 mt-4 mb-4">
              <input type="file" className="form-control" />
            </FormGroup>
            <FormGroup className="pt-3 pb-3 mt-4 mb-4">
              <label htmlFor="name" className="d-flex flex-column">
                Descripcion
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={initialValues.description}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setInitialValues({ ...initialValues, description: data });
                }}
              />
            </FormGroup>
            <FormGroup className="pt-3 pb-3 mt-4 mb-4 d-flex justify-content-around">
              <Button className="submit-btn  bg-danger Button" type="submit">
                cancel
              </Button>

              <Button className="submit-btn bg-success Button" type="submit">
                Send
              </Button>
            </FormGroup>
            <img src={Logo} alt="logo" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
