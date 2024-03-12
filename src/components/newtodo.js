import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
`;

const Button = styled.button`
    padding: 8px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    background-color: #0056b3;
    }
`;

function NewTodo() {
    return (
        <div>
        <h1>NEW TODO</h1>
        <Form>
            <Label htmlFor="title">Title:</Label>
            <Input type="text" id="title" name="title" />
            <Label htmlFor="description">Description:</Label>
            <Input type="text" id="description" name="description" />
            <Label htmlFor="title">Todo creation time::</Label>
            <Input type="date" id="date" name="date" />
        </Form>
        <Button type="submit">SAVE</Button>
        </div>
);
}

export default NewTodo;
