const ListItem = ({ item, remove, ...props }) => {
  return (
    <li>
      {item}
      <button onClick={() => remove(item)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    items: this.props.initList,
  };

  handleRemove = (item) => {
    const items = this.state.items.filter((el) => el !== item);
    this.setState({
      items,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <ListItem key={item} item={item} remove={this.handleRemove} />
            ))}
          </ul>
        ) : (
          <p>Brak elementów</p>
        )}
      </>
    );
  }
}

const initList = ["item1", "item2", "item3", "item4", "item5"];

ReactDOM.render(<List initList={initList} />, document.getElementById("root"));
