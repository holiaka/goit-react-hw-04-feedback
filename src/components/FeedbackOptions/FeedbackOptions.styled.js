import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;
export const Button = styled.button`
    min-width: 100px;
    min-height: 50px;
    background-color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    transition: background-color 500ms;
    cursor: pointer;

    :hover{
        background-color: brown;
    }
`;