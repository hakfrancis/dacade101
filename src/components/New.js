import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function New({ addMovie }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [length, setLength] = useState();
  const [value, setValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddMovie = async () => {
    if (!name || !description || !thumbnail || !length || !value) {
      alert("Fill in all fields first!");
      return;
    }
    await addMovie(name, description, thumbnail, length, value);
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleShow()}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie thumbnail</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie length (in minutes)</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLength(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie value</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cost of viewing movie"
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddMovie()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default New;
