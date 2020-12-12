import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import API from "../utils/API";

export default function UserTable() {
  const [sort, setSort] = useState(null);
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
      })
      .catch((err) => console.log(err));
  }

  function sortUsers() {
    let sortedUsers = [...users];
    if (sort !== null) {
      sortedUsers.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return -1;
        }
        if (a[sort] > b[sort]) {
          return 1;
        }
        return 0;
      });
    }
    console.log(sortedUsers);
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
                onClick={() => setSort("name.last")}
              >
                Last
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setSort("name.first")}
              >
                First
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setSort("id.value")}
              >
                User ID
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setSort("location.city")}
              >
                Location
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setSort("email")}
              >
                Email
              </Button>
            </th>
            <th scope="col">
              <Button
                className="btn btn-primary"
                type="button"
                onClick={() => setSort("phone")}
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
            .map((sortedUser) => {
              return (
                <tr key={sortedUser.id.value}>
                  <td>
                    <img src={sortedUser.picture.thumbnail} alt="Profile" />
                  </td>
                  <td>{sortedUser.name.last}</td>
                  <td>{sortedUser.name.first}</td>
                  <td>{sortedUser.id.value}</td>
                  <td>
                    {sortedUser.location.city}, {sortedUser.location.state}
                  </td>
                  <td>{sortedUser.email}</td>
                  <td>{sortedUser.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
