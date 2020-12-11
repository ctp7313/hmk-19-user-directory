import React from "react";
import UserList from "./pages/UserList";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';

export default function App() {

  return (
    <Container>
        <Header />
        <UserList />
    </Container>
  );
}