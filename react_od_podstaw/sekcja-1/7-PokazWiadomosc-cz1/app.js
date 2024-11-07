class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      ...state,
      isVisible: !state.isVisible,
    }));
  };

  render() {
    const text = "Hello World!";
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        {this.state.isVisible && <p>{text}</p>}
        {/* {this.state.isVisible ? <p>{text}</p> : null} */}
        {/* <p>{this.state.isVisible && text}</p> */}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
