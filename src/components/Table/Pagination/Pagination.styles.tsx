import styled from 'styled-components'

export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const PaginationButton = styled.button<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ selected }) => (selected ? '#EA4C89' : '#FFFFFF')};
  border-radius: 8px;
  border-style: none;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#000000')};
  cursor: pointer;
  font-weight: 500;
  height: 40px;
  margin-right: 10px;
  outline: none;
  padding: 10px 16px;
  transition: all ease 300ms;

  &:hover, &:focus {
    background-color: #F082AC;
    color: #fff;
  }

  &:disabled {
    background-color: #EAEAEA;
    color: #BDBDBD;
    cursor: not-allowed;
  }

  @media (min-width: 350px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    font-size: 14px;
`;

export const PaginationPlaceholder = styled.div`
  margin-right: 10px;
`;