import styled from 'styled-components'
import {Button} from '../../globalStyles'

const DivOrders = styled.div`

text-align: center;
width: 300px;
background-color: #D9D9D9;
border-radius: 8px;
overflow: hidden;
margin: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
align-items: center;
flex-wrap: wrap;
display: inline-block
`

const ButtonCancel = styled(Button)`
background: #D35F5F;
&:hover{
   background: #B10505
}
`   
const ButtonComplete = styled(Button)`
background: #62BF60;
&:hover{
    background: #0C700A;
 }
`


export  {DivOrders, ButtonCancel, ButtonComplete }