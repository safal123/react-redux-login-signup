import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withAlert } from "react-alert";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(` ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(` ${error.msg.email.join()}`);
      if (error.msg.message) alert.error(` ${error.msg.message.join()}`);
      if (error.status === 401) {
        alert.error(`You must be logged in to view this page ${error.msg}.`);
      }
    }
    if (message !== prevProps.message) {
      if (message.userAdded) alert.success(message.userAdded);
      if (message.userDeleted) alert.success(message.userDeleted);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
