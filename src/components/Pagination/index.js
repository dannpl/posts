import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PaginationComponent(props) {
  const [totalPages, setTotalPages] = useState(0);
  const { pagination } = props;

  const init = async () => {
    const { total, limit } = props.pagination;

    setTotalPages(total / limit);
  };

  const getPages = () => {
    const data = [];

    if (!totalPages) return [];

    for (
      let i =
        totalPages - pagination.page <= 6 ? totalPages - 5 : pagination.page;
      i <= totalPages;
      i++
    ) {
      data.push(i);
    }

    return data;
  };

  const changePagination = (page) => {
    props.changePagination({
      page: page,
      limit: pagination.limit,
      total: pagination.total,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Pagination>
      {totalPages > 0 && (
        <Pagination.Prev
          onClick={() =>
            pagination.page > 1 && changePagination(pagination.page - 1)
          }
        />
      )}
      {getPages().map((page, i) => {
        if (i > 5) return null;

        return (
          <Pagination.Item
            onClick={() => changePagination(page)}
            key={page}
            active={page === pagination.page}
          >
            {page}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() =>
          pagination.page < totalPages && changePagination(pagination.page + 1)
        }
      />
    </Pagination>
  );
}

PaginationComponent.propTypes = {
  pagination: PropTypes.any,
  changePagination: PropTypes.func,
  total: PropTypes.any,
  limit: PropTypes.any,
};
