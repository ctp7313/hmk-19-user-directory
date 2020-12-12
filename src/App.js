import React from "react";
import UserTable from "./components/UserTable";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';

export default function App() {

  return (
    <Container>
        <Header />
        <UserTable />
    </Container>
  );
}