import styled from 'styled-components'

export const LabelContainer = styled.div`
  margin-bottom: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  margin-right: 10px;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  text-decoration: none;
  transition: all ease 300ms;
  width: 100%;

  &:hover, &:focus {
    background-color: #FCE9F1;
  }
`;

export const SearchButton = styled.button`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: all ease 300ms;
  
  &:hover, &:focus {
    background-color: #F082AC;
  }
`;