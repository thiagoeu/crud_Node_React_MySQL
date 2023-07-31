import React, { useRef } from 'react'
import styled from 'styled-components'


const FormContainer = styled.form`
    display: flex;
    align-itens: flex-end;
    gap: 10px;
    flex-warp: warp;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    boder-radius: 5px;

`;
const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;


const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Label = styled.label``;

const Input = styled.input``;


const Form = ({ onEdit }) => {
    const ref = useRef()
    return (
        <FormContainer>
            <InputArea>
                <Label> Nome </Label>
                <Input name = "nome"></Input>
            </InputArea>
            <InputArea>
                <Label> E-Mail </Label>
                <Input name = "email"></Input>
            </InputArea>
            <InputArea>
                <Label> Telefone </Label>
                <Input name = "telefone"></Input>
            </InputArea>
            <InputArea>
                <Label>Data Nascimento</Label>
                <Input name = "data_nascimento" type='date'></Input>
            </InputArea>


            <Button type="submit"> Salvar </Button>
        </FormContainer>
  )
}

export default Form