class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "2",
  };

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            dupa="dupsko"
            name="city"
            value={this.state.city}
            onChange={(e) => this.handleChange(e)}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            name="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            name="number"
            value={this.state.number}
            onChange={(e) => this.handleChange(e)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
        <p>
          <span>{this.state.city} | </span>
          <span>{this.state.text} | </span>
          <span>
            {this.state.isLoved ? "Lubisz to miasto" : "Nie lubisz tego miasta"}{" "}
            |{" "}
          </span>
          <span>{this.state.number}</span>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
