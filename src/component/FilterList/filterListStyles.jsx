import styled from 'styled-components'

const Ul = styled.ul`

text-align: center;

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
text-align: center;
`

const DivList = styled.div`
display: inline;
text-align: center;
`

const DivFilter = styled.div`

`
export {Ul, Li, DivList}