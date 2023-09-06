import React from "react";
import { gql } from "@apollo/client";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";

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

const EditProfile = () => {
  return (
    <div>
      <PageTitle title="Edit Profile" />
      <FormBox>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Username"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input placeholder="Avatar"></input>
        <input placeholder="Bio"></input>
      </FormBox>
      <Button type="submit" disabled={true} />
    </div>
  );
};

export default EditProfile;
