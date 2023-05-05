import styled from "styled-components";

// setting the width of the WhiteBox to 100% ensures that the TopBox and BottomBox components will also have a width of 100% of their parent element's width
const BaseBox = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
`;

export default BaseBox;