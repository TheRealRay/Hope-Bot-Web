import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <p>Home</p>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a footer
          </p>
        </footer>
      </div>
    );
  }
}
