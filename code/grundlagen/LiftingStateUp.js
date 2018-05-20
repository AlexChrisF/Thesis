class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      winner: null
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  calculateWinner(this.state.squares){
      ...  
      this.setsState({winner: whoeverWon})
 }
 
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          ...
        </div>
        <div className="board-row">
          ...
        </div>
      </div>
    );
  }
}
