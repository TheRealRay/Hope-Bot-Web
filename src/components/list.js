import React from 'react';
import ListItem from './listItem';
// import Entry from '../model/entry';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item =>
          <ListItem entryText = {item.entryText} timestamp = {item.timestamp} />
        )}
      </ul>
    );
  }

  fetch('/api/latest-bills').then((response) => {
    return response.json();
  }).then((data) => {
    this.setState({items: data.items});
  }).catch((err) => {
    throw new Error(err);
  });
}
