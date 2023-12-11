import { Input } from "antd";
import styled from "styled-components";

interface StyledInputProps {
    mainInput: boolean;
}

//Input personalizado en el que recibe una prop desde la pagina principal, aclarando asi si se debe implementar estos estilos o los inputs permanecen predeterminados
export const StyleInput = styled(Input)<StyledInputProps>`
     ${(props) =>
        props.mainInput && `
            background-color: rgba(0, 0, 0, .2);
            color: white;
            margin-top: 25px;
            width: 420px;
            height: 50px;
            font-size: large;
            border-radius: 15px;
            border-color: #4743e8;

            &::placeholder{
                color: grey !important;
            }
        `
    }
`
