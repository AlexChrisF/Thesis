class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button onClick={() => this.setState({value: 'X'})}> 
          {this.state.value}
      </button>
    );
  }
}