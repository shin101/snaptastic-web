import styled from "styled-components";
import React from "react";

interface SAvatarProps {
  lg?: boolean;
}

interface AvatarProps {
  url?: string;
  lg?: boolean;
}

const SAvatar = styled.div<SAvatarProps>`
  width: ${(props) => (props.lg ? "30px" : "25px")};
  height: ${(props) => (props.lg ? "30px" : "25px")};
  border-radius: 50%;
  background-color: #2c2c2c;
  overflow: hidden;
  border: none;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({ url = "", lg = false }: AvatarProps) => {
  return (
    <SAvatar lg={lg}>
      {url !== "" ? <Img src={url} alt="avatar" /> : null}
    </SAvatar>
  );
};

export default Avatar;
