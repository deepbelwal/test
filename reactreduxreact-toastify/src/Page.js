import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { incrementAction, decreaseAction } from "./actions";

class Page extends PureComponent {
  render() {
    const { value, incrementAction, decreaseAction } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
