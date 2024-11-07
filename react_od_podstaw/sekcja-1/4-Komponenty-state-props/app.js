class ShoppingList extends React.Component {
  state = {
    items: ["ogórki", "bułki", "szynka"],
  };

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ItemList items={this.state.items} />
      </>
    );
  }
}

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item name={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  return <li>{props.name}</li>;
};

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
