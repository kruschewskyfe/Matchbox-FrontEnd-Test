import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;

  ul {
    list-style: none;

    li {
      padding: 15px 20px;

      &:nth-child(2n -1) {
        background: #f5f5f5;
      }

      &:hover {
        background: #1cbcb4;
      }
    }
  }
`;

export const ContainerImage = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: right;
  border-radius: 3px;

  strong {
    font-size: 18px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }
`;
