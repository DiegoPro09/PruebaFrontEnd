import { Button, Divider } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const DivContainer = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const MainContent = styled.div`
    width: 1200px;
    height: 550px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    border: none;
    padding: 80px;
`

export const MainText = styled(Title)`
    .custom-text{
        color:white;
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
        margin-top: 65px;
    }
`

export const StyleDivider = styled(Divider)`
    background-color:white;
    margin-top: 50px;
    margin-bottom: 60px;
`

export const CustomButton = styled(Button)`
    background-color: #4743e8;
    color: white;
    border: none;
    border-radius: 10px;
    height: 50px;
    width: 120px;
    font-size: medium;

    &:hover {
        background: linear-gradient(to bottom right, #7f8ffa, #4743e8) !important;
        color: white;
        border: none;
    }
`