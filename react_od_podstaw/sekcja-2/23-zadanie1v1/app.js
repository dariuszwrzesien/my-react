/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class Draw extends React.Component {
  state = {
    selectedIndex: 0,
    options: ["wróżba 1", "wróżba 2", "wróżba 3"],
    form: {
      optionValue: "",
    },
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      selectedIndex: index,
    });
  };

  handleFormOptionValueChange = (e) => {
    this.setState({
      form: {
        optionValue: e.target.value,
      },
    });
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const options = [...this.state.options];
    options.push(this.state.form.optionValue);
    this.setState(
      {
        options,
        form: {
          optionValue: "",
        },
      },
      () => this.showInfo()
    );
  };

  isValid = () => {
    if (this.state.form.optionValue === "") {
      return false;
    }
    return true;
  };

  showInfo = () => {
    alert(`
      Wróżba została dodana!
      Aktualne wróżby: ${this.state.options.join(", ")}
      `);
  };

  render() {
    const { selectedIndex, options } = this.state;
    return (
      <>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        <br />
        <form onSubmit={this.handleAddOption}>
          <input
            value={this.state.form.optionValue}
            onChange={this.handleFormOptionValueChange}
          />
          {!this.isValid() && (
            <p style={{ color: "red" }}>Wpisz coś jeśli chcesz dodać wróżbę.</p>
          )}
          <br />
          <button type="submit">Dodaj wróźbę</button>
        </form>
        {selectedIndex !== null && <p>{options[selectedIndex]}</p>}
      </>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
