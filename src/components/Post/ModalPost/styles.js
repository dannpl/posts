import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #0000004a;
  visibility: ${(props) => (props.show ? 'unset' : 'hidden')};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background-color: white;
  z-index: 6;
  width: 50%;
  height: auto;
  max-height: 70%;
  overflow: auto;
  position: relative;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 80%;
  }

  .comments {
    margin-top: 20px;

    .label {
      margin-bottom: -15px;
    }
  }

  .comt {
    margin: 20px 0px;
  }

  .label {
    color: #64acfb;
    font-weight: 600;
    font-size: 13px;
    margin: 0px;
    margin-bottom: 5px;
  }

  .value {
    color: #000000d6;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 3px;
  }

  .description {
    margin-top: 0px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .text-desc {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  .close-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }

  .title {
    font-size: 22px;
    padding-right: 20px;
    font-weight: bold;
  }

  .loading {
    margin-top: 15px;

    .fake {
      border-radius: 5px;
      height: 1.5rem;

      &.w-4 {
        width: 40%;
      }

      &.w-8 {
        width: 80%;
      }

      &.w-12 {
        width: 100%;
      }
    }
  }
`;
