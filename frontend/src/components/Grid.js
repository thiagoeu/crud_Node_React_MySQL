import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #ffff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    max-width:  800px;
    margin: 20px auto;
    word-break: break-all; 
`

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;




const Grid = () => {
  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th onlyWeb>Fone</Th>
                <Th>teste1</Th>
                <Th>teste2</Th>
            </Tr>
        </Thead>
    </Table>
  )
}

export default Grid