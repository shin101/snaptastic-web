import styled from "styled-components";

// setting the width of the WhiteBox to 100% ensures that the TopBox and BottomBox components will also have a width of 100% of their parent element's width
export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const FatLink = styled.span`
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

export const FatText = styled.span`
  font-weight: 600;
`;
