import styled from 'styled-components'

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

const DivFilter = styled.div`

text-align: center;
`

export {Ul, Li, DivFilter}