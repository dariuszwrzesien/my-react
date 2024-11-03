const Input = ({ handleChange, handleReset, value, ...props }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

const Text = ({ text, ...props }) => <p>{text}</p>;

class App extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleReset = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <>
        <Input
          handleChange={this.handleChange}
          handleReset={this.handleReset}
          value={this.state.text}
        />
        <Text text={this.state.text} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
