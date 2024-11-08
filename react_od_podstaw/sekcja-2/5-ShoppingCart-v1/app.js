const CART_ACTION = {
  ADD: "ADD",
  ADD_LABEL: "+",
  REMOVE: "REMOVE",
  REMOVE_LABEL: "-",
};

const CartActionButton = ({ action, label, isDisabled, click, ...props }) => {
  return (
    <button disabled={isDisabled} onClick={() => click(action)}>
      {label}
    </button>
  );
};
class App extends React.Component {
  state = {
    availableProducts: 10,
    shoppingCart: 0,
  };

  handleCartAction = (action) => () => {
    this.setState((prevState) => {
      if (action === CART_ACTION.ADD) {
        return { shoppingCart: prevState.shoppingCart + 1 };
      } else if (action === CART_ACTION.REMOVE) {
        return { shoppingCart: prevState.shoppingCart - 1 };
      }
    });
  };

  handleBuy = () => {
    this.setState((state) => ({
      availableProducts: state.availableProducts - state.shoppingCart,
      shoppingCart: 0,
    }));
  };

  displayBuyButton = () => {
    const { shoppingCart, availableProducts } = this.state;
    if (shoppingCart && shoppingCart <= availableProducts) {
      return <button onClick={() => this.handleBuy()}>KUP</button>;
    }
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    return (
      <>
        <CartActionButton
          action={CART_ACTION.REMOVE}
          label={CART_ACTION.REMOVE_LABEL}
          isDisabled={!shoppingCart}
          click={this.handleCartAction(CART_ACTION.REMOVE)}
        />
        <span> {shoppingCart} </span>
        <CartActionButton
          action={CART_ACTION.ADD}
          label={CART_ACTION.ADD_LABEL}
          isDisabled={shoppingCart >= availableProducts}
          click={this.handleCartAction(CART_ACTION.ADD)}
        />
        {this.displayBuyButton()}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
