import React, { Component } from "react";

// Components
import { UsersList } from "./components/users-list/users-list.component";
import { SearchBar } from "./components/search-bar/search-bar.component";

// Styles
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    // State
    this.state = {
      users: [],
      searchQuery: "",
    };

    // Functions Binding
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  // Lifecycler Methods

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  // Handlers
  handleQueryChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });
    return (
      <div className="app-container">
        <SearchBar
          placeholder="Search People"
          handleChange={this.handleQueryChange}
          value={this.state.searchQuery}
        />
        <UsersList users={filteredUsers} />
      </div>
    );
  }
}
