import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0px 12px;
  flex-direction: column;

  .container-mode {
    margin: 72px 0px 12px 0px;
    padding: 0px 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
      color: #64acfb;
      font-weight: bold;
      font-size: 13px;
      margin-right: 8px;
    }

    .icon-mode {
      cursor: pointer;

      &:hover {
        color: #64acfb;
      }
    }
  }

  .container-pagination {
    padding: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
`;

export const CardsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 15px;
  flex-wrap: wrap;
  height: calc(100vh - 200px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Card = styled.div`
  width: ${(props) => (props.mode === 'list' ? '100%' : '20%')};
  padding: 10px;

  @media (max-width: 1200px) {
    width: ${(props) => (props.mode === 'list' ? '100%' : '33.3%')};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.mode === 'list' ? '100%' : '50%')};
  }

  @media (max-width: 545px) {
    width: 100%;
  }

  .content {
    background-color: white;
  }
`;
