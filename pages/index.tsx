import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import UserForm from "../components/UserForm";
import UserProfile from "../components/UserProfile";
import { useUserContext } from "../context/userContext";
import { User } from "../types/dataTypes";

const Home: NextPage = () => {
  const {
    isUserCreated,


  } = useUserContext()

  const handleSubmit = (userData: { email: string, name: String }) => {
    // alert(userData.name);
    console.log(userData)
  }

  return <>
    <Layout>
      {!isUserCreated ? (<>
        <Title title={'Register deg her i dag!'} />
        <UserForm handleSubmit={handleSubmit} />
      </>) : <UserProfile />}
    </Layout>


  </>;
};

export default Home;
