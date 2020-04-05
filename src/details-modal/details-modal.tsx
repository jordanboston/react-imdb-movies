import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// interface movieDetails {
//   trailer: {
//     'imDbId': string,
//     'title': string,
//     'fullTitle': string,
//     'type': string,
//     'year': string,
//     'videoId': string,
//     'videoTitle': string,
//     'videoDescription': string,
//     'thumbnailUrl': string,
//     'uploadDate': string,
//     'link': string,
//     'linkEmbed': string,
//     'errorMessage': string,
//   };
// }

const DetailsModal = ({ show, handleCloseModal }: any, { ...movieDetails }) => {
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{movieDetails.trailer.title}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;
