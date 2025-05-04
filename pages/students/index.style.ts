import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  padding: 10px;

  table {
    width: 100%;
    border: 1px solid #f0f0f0;
    border-collapse: collapse;
  }

  table tr,
  table tr th,
  table tr td {
    border: 1px solid #f0f0f0;
    background-color: gray;
  }

  h2 {
    width: 300px;
    background-color: gray;
  }
  
  th,
  td {
    padding: 8px 6px;
  }
`;
