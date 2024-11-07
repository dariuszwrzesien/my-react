const Header = () => {
  return <h1>Witaj na stronie!</h1>;
};

class Blog extends React.Component {
  state = {
    number: 0,
  };

  test = {
    test1: 1,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>artykuł! {this.state.number}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quia
          beatae consequatur a, modi voluptatibus repudiandae. Optio rem hic
          quam, ducimus esse qui, itaque, suscipit nemo odio commodi odit
          aspernatur.
        </p>
      </div>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
