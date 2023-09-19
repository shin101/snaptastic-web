import React from "react";
import { gql } from "@apollo/client";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import styled from "styled-components";

const EditProfile_Mutation = gql`
  mutation editProfile(
    $firstName: String
    $lastName: String
    $username: String
    $email: String
    $password: String
    $avatar: Upload
    $bio: String
  ) {
    editProfile(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
      avatar: $avatar
      bio: $bio
    ) {
      ok
      error
    }
  }
`;

const EditProfileContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

const EditProfile: React.FC = () => {
  return (
    <div>
      <PageTitle title="Edit Profile" />
      <EditProfileContainer>
        <FormBox>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Avatar" />
          <Input placeholder="Bio" />
          <Button type="submit" disabled={true} />
        </FormBox>
      </EditProfileContainer>
    </div>
  );
};

export default EditProfile;
