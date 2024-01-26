import styled from 'styled-components'

const Ul = styled.ul`

display: inline;

`
const Li = styled.li`

width: 20px;
display: inline;
margin-right: 10px;
margin-left: 10px;
&:hover{
    font-size: 15px;
    color: #B2DAFA;
}
color: white;
cursor:pointer;
`

const DivFilter = styled.div`

text-align: center;
`

export {Ul, Li, DivFilter}