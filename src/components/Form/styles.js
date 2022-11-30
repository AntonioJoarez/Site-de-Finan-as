 import styled from "styled-components";

 export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: white;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 15px;

    @media (max-width: 750p) {
        display: grid;
    }
 `;

 export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
 `;

 export const Label = styled.label`
    font-size: 20;
    font-weight: 600;
 `;

 export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 20px;
    border: 1px solid #ccc;
 `;

 export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
 `;

  export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #1b004b;
  `

