const FILTER_ACTION = {
  ALL: "add",
  FEMALE: "female",
  MALE: "male",
};

const data = {
  users: [
    { id: 1, name: "Adam", age: 25, sex: "male" },
    { id: 2, name: "Kasia", age: 30, sex: "female" },
    { id: 3, name: "Piotr", age: 35, sex: "male" },
  ],
};
const Item = ({ content, ...props }) => (
  <div className="userInfo">
    <h1>{content.name}</h1>
    <p>
      <span>({content.age} l) </span>
      <span>{content.sex}</span>
    </p>
  </div>
);

const FilterMenu = ({ onFilter, ...props }) => {
  return (
    <div>
      <button onClick={() => onFilter(FILTER_ACTION.ALL)}>Wszyscy</button>
      <button onClick={() => onFilter(FILTER_ACTION.FEMALE)}>Kobiety</button>
      <button onClick={() => onFilter(FILTER_ACTION.MALE)}>Mężczyźni</button>
    </div>
  );
};

class ListItems extends React.Component {
  state = {
    users: this.props.data.users,
  };

  handleFilter = (action) => {
    const users = this.props.data.users;
    this.setState(() => {
      switch (action) {
        case FILTER_ACTION.FEMALE:
          return {
            users: users.filter((user) => user.sex === FILTER_ACTION.FEMALE),
          };
        case FILTER_ACTION.MALE:
          return {
            users: users.filter((user) => user.sex === FILTER_ACTION.MALE),
          };
        default:
          return { users };
      }
    });
  };

  render() {
    const users = this.state.users;
    return (
      <>
        <FilterMenu onFilter={this.handleFilter} />
        <div>
          {users.map((item) => (
            <Item key={item.id} content={item} />
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
