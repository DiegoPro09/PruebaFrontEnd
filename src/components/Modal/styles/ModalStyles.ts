import { Button } from "antd";
import styled from "styled-components";

interface TypeButton{
    typeButton: string //porque las interfaces dentro de los customstyles y que libreria externa se usa ${name}${t('buttons.-characters')}
} 

//Boton personalizado que cambia los colores dependiendo cual pelicula es
export const CustomModalButton = styled(Button)<TypeButton>`
    background-color: ${(props) => props.typeButton === 'first' ? '#6169f3' : '#3532b3'};
    color: white;
    width: 350px;
    height: 80px;
    border-radius: 15px;
    border: none;
    font-size: x-large;

    &:hover {
        background-color: ${(props) => props.typeButton === 'first' ? '#3b36cc' : '#1b1a4c'} !important;
        color: white !important;
    }
`