const displayMessage = (isFormSubmitted, isConfirmed) => {
  if (isFormSubmitted) {
    return (
      <ValidationMessage
        isValid={isConfirmed}
        validationMessage={{
          valid: "Możesz obejrzeć film. Zapraszamy!",
          invalid:
            "Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat!",
        }}
      />
    );
  }
  return null;
};

const ValidationMessage = ({ isValid, validationMessage, ...props }) => {
  return isValid ? (
    <p>{validationMessage.valid}</p>
  ) : (
    <p>{validationMessage.invalid}</p>
  );
};

const TicketShopForm = ({
  isConfirmed,
  isFormSubmitted,
  ageChange,
  submit,
  ...props
}) => {
  return (
    <form onSubmit={submit}>
      <input
        type="checkbox"
        id="age"
        checked={isConfirmed}
        onChange={(e) => ageChange(e)}
      />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      {displayMessage(isFormSubmitted, isConfirmed)}
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleAgeChange = (e) => {
    this.setState({
      isConfirmed: e.target.checked,
      isFormSubmitted: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <TicketShopForm
          isConfirmed={isConfirmed}
          isFormSubmitted={isFormSubmitted}
          ageChange={this.handleAgeChange}
          submit={this.handleSubmit}
        />
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
