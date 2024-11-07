const Type = {
  MINUS: "minus",
  RESET: "reset",
  PLUS: "plus",
};

const Button = ({ label, type, value, click, ...props }) => {
  return <button onClick={() => click(type, value)}>{label}</button>;
};

const CounterDisplay = ({ count, result, ...props }) => {
  const color = result > 0 ? "green" : result < 0 ? "red" : "black";
  return (
    <>
      <h1>click count: {count}</h1>
      <h1 style={{ color: color }}>result: {result}</h1>
    </>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      result: this.props.result,
    };
  }

  handleClick = (type = Type.RESET, number = 1) => {
    switch (type) {
      case Type.MINUS:
        this.setState((state) => ({
          count: state.count + 1,
          result: state.result - number,
        }));
        break;
      case Type.RESET:
        this.setState(() => ({
          count: this.props.count,
          result: this.props.result,
        }));
        break;
      case Type.PLUS:
        this.setState((state) => ({
          count: state.count + 1,
          result: state.result + number,
        }));
        break;
      default:
        console.log("error");
    }
  };

  render() {
    return (
      <>
        <Button
          label="-1"
          type={Type.MINUS}
          value={1}
          click={this.handleClick}
        />
        <Button
          label="-10"
          type={Type.MINUS}
          value={10}
          click={this.handleClick}
        />
        <Button label="Reset" type={Type.RESET} click={this.handleClick} />
        <Button
          label="+10"
          type={Type.PLUS}
          value={10}
          click={this.handleClick}
        />
        <Button
          label="+1"
          type={Type.PLUS}
          value={1}
          click={this.handleClick}
        />
        <CounterDisplay count={this.state.count} result={this.state.result} />
        {/* <button onClick={() => this.handleClick("minus")}>-1</button>
        <button onClick={() => this.handleClick("minus", 10)}>-10</button>
        <button onClick={() => this.handleClick()}>Reset</button>
        <button onClick={() => this.handleClick("plus", 10)}>+10</button>
        <button onClick={() => this.handleClick("plus")}>+1</button> */}
        {/* <h1>click count: {this.state.count}</h1>
        <h1>result: {this.state.result}</h1> */}
      </>
    );
  }
}

const init = {
  result: 0,
  count: 0,
};
ReactDOM.render(
  <Counter count={init.count} result={init.result} />,
  document.getElementById("root")
);
