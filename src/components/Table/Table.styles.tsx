import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MoviesTableContainer = styled.div`
  height: auto;
  max-height: 500px;
  margin-top: 20px;
  overflow: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  }

  th {
    padding: 16px;
    border-left: 1px dotted rgba(200, 209, 224, 0.6);
    border-bottom: 1px solid #e8e8e8;
    background: #EA4C89;
    text-align: left;
    color: #fff;
    box-shadow: 0 0 0 2px #e8e8e8;
  }
`

export const MoviesTable = styled.table`
  overflow: auto;

  thead tr th {
    position: sticky;
    top: 0;
  }

  thead {
    tr {
      th {
        text-align: left;
        padding: 15px 5px 15px 15px;
        cursor: pointer;
        transition: all ease 300ms;
        
        &:hover {
          color: #EA4C89;
          background: #FCE9F1;
        }

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }

      th:nth-child(1) {
        width: 80%;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 15px;
        background: #FFFFFF;
        margin: 0;
      }
    }
  }
`
