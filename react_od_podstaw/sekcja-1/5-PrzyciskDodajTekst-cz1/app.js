const Button = ({ handleClick, label, ...props }) => (
  <button onClick={handleClick}>{label}</button>
);

const Text = ({ text, ...props }) => <p>{text}</p>;

class App extends React.Component {
  state = {
    text: "",
  };

  handleClick = () => {
    this.setState((prevState) => ({
      text:
        prevState.text +
        String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    }));
  };

  render() {
    return (
      <>
        <Button handleClick={() => this.handleClick()} label="Add letter" />
        <Text text={this.state.text} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
