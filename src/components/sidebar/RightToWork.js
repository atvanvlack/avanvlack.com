import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RightToWork extends Component {
  renderListItem(item) {
    return (
      <li>
        {item}
      </li>
    );
  }
  render() {
    return (
      <div className="education-container container-block">
        <h2 className="container-block-title">{this.props.sectionTitle || 'Rights to Work'}</h2>
        <ul className="list-unstyled interests-list">
        {this.props.list.map((item) => {
            return this.renderListItem(item);
          })}
          </ul>
      </div>
    );
  }
}

RightToWork.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired
};

