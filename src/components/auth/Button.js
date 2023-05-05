import styled from "styled-components"

const StyledButton = styled.input`
  border: none;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
`

function Button(props){
  return <StyledButton {...props} />
}

export default Button;