import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <form className="switch-field">
        <div className="switch-title">
          <h5>{this.props.title}</h5>
        </div>

        <input
          type="radio"
          id="cc"
          name="paymentMethod"
          value={this.props.leftLabel}
          onChange={this.toggleState}
          checked={!this.state.toggle}
        />
        <label htmlFor="cc">{this.props.leftLabel}</label>

        <input
          type="radio"
          id="bank"
          name="paymentMethod"
          value={this.props.rightLabel}
          onChange={this.toggleState}
          checked={this.state.toggle}
        />
        <label htmlFor="bank">{this.props.rightLabel}</label>
      </form>
    );
  }
}

export default Toggle;

// const ToggleExample = function () {
//   return (
//     <Toggle title="Timeframe" leftLabel="Date range" rightLabel="By month" />
//   );
// };
