const Input = ({ handleChange, handleReset, value, inputRef, ...props }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={value}
        ref={inputRef}
        placeholder="wpisz coś..."
      />
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

const Text = ({ text, ...props }) => <p className="title">{text}</p>;

class App extends React.Component {
  state = {
    text: "",
  };

  inputRef = React.createRef();

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleReset = () => {
    this.setState({ text: "" }, () => {
      this.inputRef.current.focus();
    });
  };

  render() {
    return (
      <>
        <Input
          handleChange={this.handleChange}
          handleReset={this.handleReset}
          value={this.state.text}
          inputRef={this.inputRef}
        />
        <Text text={this.state.text} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
