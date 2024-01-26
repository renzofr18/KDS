import styled from 'styled-components'
import {OrderItem} from './component/OrderItem/orderItem'

const H1 = styled.h1`

font-family: arial;
text-align: center;
`
const Ul = styled.ul`

display: inline;

`
const Li = styled.li`

display: inline;
margin-right: 10px;
margin-left: 10px;
&:hover{
    font-size: 18px;
    color: red;
}
`

const Div = styled.div`

text-align: center;
`

const Button = styled.button`

border-radius: 70px;
border: none;
color: white;
padding: 10px 40px;
-webkit-box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.19);
-moz-box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.19);
box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.19);
margin-right: 15px;
margin-left: 15px;
background: #6BBCEA;
margin-bottom: 15px;

&:hover{
    background: red;
}
`



export  {H1, Ul, Li, Div, Button};