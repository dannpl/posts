import React from 'react';
import PropTypes from 'prop-types';

import { X } from 'react-bootstrap-icons';
import { Modal, Container } from './styles';

function ModalEdit(props) {
  return (
    <Container show={props.show}>
      <Modal>
        <X onClick={props.close} className="close-icon" size={25} />
        {!props.post.loaded && (
          <div className="loading">
            <p className="no-data w-4 fake" />
            <p className="no-data w-8 fake" />
            <p className="no-data w-12 fake" />
          </div>
        )}

        {props.post.loaded && (
          <>
            <div className="user-info">
              <p className="value">{props.post.user?.name}</p>
              <p className="value">{props.post.user?.email}</p>
            </div>
            <p className="title">{props.post.title}</p>

            <div className="description">
              <p className="label">Description</p>
              <div className="text-desc">
                <p className="value">{props.post.body}</p>
              </div>
            </div>

            <div className="comments">
              <p className="label">Comments</p>
              {props.post.comments &&
                props.post.comments.map((item) => (
                  <div key={item.id} className="comt">
                    <div className="user-info">
                      <p className="value">{item.name}</p>
                      <p className="value">{item.email}</p>
                    </div>
                    <div className="body">{item.body}</div>
                  </div>
                ))}
            </div>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default ModalEdit;

ModalEdit.propTypes = {
  post: PropTypes.object,
  show: PropTypes.bool,
  close: PropTypes.func,
};
