import React, { Component } from "react";

import { ThemeContext } from "../context/ThemeContext";
class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Cather of the rye</li>
          <li style={{ background: theme.ui }}>Old man and the sea</li>
          <li style={{ background: theme.ui }}>Perks of being a wall flower</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
