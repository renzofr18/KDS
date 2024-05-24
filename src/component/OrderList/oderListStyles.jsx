import styled from 'styled-components'

const DivList = styled.p`
    text-align: center;
    color: white;
`

const Inputt = styled.input`
width: 300px;                /* Ancho del input */
padding: 10px;               /* Espaciado interno */
margin: 10px 715px;              /* Espaciado externo */
border: 2px solid #ccc;      /* Borde */
border-radius: 5px;          /* Bordes redondeados */
font-size: 16px;             /* Tamaño de la fuente */
transition: border-color 0.3s, box-shadow 0.3s; /* Transiciones suaves */
ite

&:focus {
    border-color: #66afe9;    /* Color del borde en foco */
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6); /* Sombra en foco */
    outline: none;            /* Quitar el outline predeterminado */
}

&::placeholder {
    color: #999;              /* Color del placeholder */
    opacity: 1;               /* Asegurar que el color del placeholder se aplique */
}
`;
export  {DivList, Inputt}