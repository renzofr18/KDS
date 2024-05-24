import styled from 'styled-components'

const H1 = styled.h1`

font-family: TimerNewRoman;
text-align: center;
color: white;
`

const Button = styled.button`

border-radius: 70px;
border: none;
color: white;
padding: 10px 40px;
-webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.6);
-moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.6);
box-shadow: 0px 0px 7x 0px rgba(0,0,0,0.6);
margin-right: 15px;
margin-left: 15px;
background: #3F84C5;
margin-bottom: 15px;
&:hover{
    background: #005585;
}

`

export  {H1, Button,};