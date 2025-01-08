import React, { useEffect } from "react";
import Header from "../Components/Header";
import Ticker from "../Components/Ticker";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <Header />
      <Ticker />
      <LoginForm />
      <Footer />
    </>
  );
}
