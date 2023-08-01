import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  img {
    margin: 0px 5px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AppDownload = () => {
  return (
    <Container>
      <h1>Download Our App (coming soon)</h1>
      <BadgeContainer>
        <img src="/images/app-store-badge.png" alt="download on app store"  width="150px" height="50px" />
        <img
          src="/images/google-play-badge.png"
          alt="download on google play" width="150px" height="50px"
        />
      </BadgeContainer>
    </Container>
  );
};

export default AppDownload;
