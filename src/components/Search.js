import React from "react";

export default function Search(props) {
  return (
    <form className="form-inline">
      <input
        onChange={(e) => props.setSearch(e.target.value)}
        className="form-control "
        itemType="search"
        placeholder="Search Last Name"
        aria-label="Search"
      />
      <button className="btn btn-primary" itemType="submit">
        Search
      </button>
    </form>
  );
}
