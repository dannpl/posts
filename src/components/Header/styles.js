import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  top: 0;
  width: 100%;
  align-items: center;
  padding: 0px 20px;
  height: 70px;
  background-color: #092f57;
  transition: all 0.3s;

  .name {
    color: white;
    font-size: 15px;
    margin-left: 10px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #61dafb;
    }
  }
`;
