import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CardPost({
  title,
  body,
  mode,
  loading,
  openModal,
  id,
}) {
  return (
    <Container mode={mode} onClick={() => openModal(id)}>
      {loading && (
        <>
          <p className="no-data w-4 fake" />
          <p className="no-data w-8 fake" />
          <p className="no-data w-12 fake" />
        </>
      )}
      {!loading && (
        <>
          <div className="post-info">
            <p className="label">Title</p>
            <span className="value">{title}</span>
          </div>

          <div className="description">
            <p className="label">Description</p>
            <div className="text-desc">
              <p className="value">{body}</p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

CardPost.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  body: PropTypes.string,
  loading: PropTypes.bool,
  mode: PropTypes.string,
  openModal: PropTypes.func,
};
