import styled from "styled-components";

const StyledInput = 
  styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: ${props => props.theme.accent};
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 5px;
    box-sizing: border-box;
  `
// box-sizing : ensures elements are sized and positioned precisely without calculating extra space for padding + borders


function Input(props){
  return <StyledInput {...props} />
}

export default Input;