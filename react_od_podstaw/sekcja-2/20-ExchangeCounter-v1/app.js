const UNIT = {
  PETROL: "petrol",
  ORANGES: "oranges",
};

class ExchangeCounter extends React.Component {
  state = {
    value: 0,
    unit: UNIT.PETROL,
    usd: 0,
    eur: 0,
  };

  conversionFactor = {
    petrol: 5.5,
    oranges: 3.2,
    usd: 3.6,
    eur: 4.2,
  };

  handleAmountChange = (e, unit) => {
    const value = parseFloat(e.target.value);
    const usd = (
      (value * this.conversionFactor[unit]) /
      this.conversionFactor.usd
    ).toFixed(2);
    const eur = (
      (value * this.conversionFactor[unit]) /
      this.conversionFactor.eur
    ).toFixed(2);

    this.setState({
      value,
      usd: isNaN(usd) ? 0 : usd,
      eur: isNaN(eur) ? 0 : eur,
    });
  };

  handleOnChangeUnit = (e) => {
    const unit = e.target.value;
    this.setState({
      unit,
    });
  };

  render() {
    const { value, unit, usd, eur } = this.state;
    return (
      <div>
        <h1>Wybierz:</h1>
        <select name="unit" onChange={this.handleOnChangeUnit}>
          <option value={UNIT.PETROL}>Benzyna</option>
          <option value={UNIT.ORANGES}>Pomarańcze</option>
        </select>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={(e) => this.handleAmountChange(e, unit)}
        />
        <p>$: {usd}</p>
        <p>&euro;: {eur}</p>
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
