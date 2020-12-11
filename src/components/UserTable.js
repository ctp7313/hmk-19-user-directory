import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import API from "../utils/API";

export default function UserTable() {
  const [list, setList] = useState();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    sortUsers();
  });

  function loadUsers() {
    API.getUsers()
      .then((users) => {
        setUsers(users.data.results);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }

  function sortUsers() {
    let sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      console.log(list)
      if (list !== null) {
      if (a[users.list] < b[users.list]) {
        return users.direction === 'ascending' ? -1 : 1;
      }
      if (a[users.list] > b[users.list]) {
        return users.direction === 'ascending' ? 1 : -1;      }
      return 0;
    }});
  }

  return (
    <Container>
      <Search setSearch={setSearch} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="Button"
                onClick={() => setList("name.last")}
              >
                Last
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setList("name.first")}
              >
                First
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setList("id.value")}
              >
                User ID
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setList("location")}
              >
                Location
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setList("email")}
              >
                Email
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setList("phone")}
              >
                Phone Number
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((line) => {
              if (line.name.last.includes(search)) {
                return line;
              }
            })
            .map((user) => {
              return (
                <tr key={user.id.value}>
                  <td>
                    <img src={user.picture.thumbnail} alt="Profile" />
                  </td>
                  <td>{user.name.last}</td>
                  <td>{user.name.first}</td>
                  <td>{user.id.value}</td>
                  <td>{user.location.city}, {user.location.state}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
