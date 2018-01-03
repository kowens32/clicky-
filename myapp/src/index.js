import React from 'react';
import ReactDOM from 'react-dom';


class Square extends React.Component {
    render() {
        return(
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }


    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (<Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}/>
        );

    }

    render() {
        const status = 'Click an image to start!';

        let array = ['BellatrixLestrange', 'DracoMalfoy', 'GinnyWeasley', 'HermioneGranger', 'LordVoldemort', 'NymphadoraLupin',
            'ProfessorAlbusDumbledore', 'ProfessorMinervaMcGonagall', 'ProfessorSeverusSnape', 'RonWeasley', 'RubeusHagrid', 'SiriusBlack']
       let images = array.map(image => {
           return <img key={image} src={require(`./img/${image}.jpeg`)} alt="" className="img-responsive" />
       });
        return (
            <div>
        <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}
                {images}
            </div>
        <div className="board-row">
          {this.renderSquare(4)}{this.renderSquare(5)}{this.renderSquare(6)}{this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}{this.renderSquare(9)}{this.renderSquare(10)}{this.renderSquare(11)}
        </div>

        </div>
        );
   }

       }
class Game extends React.Component {
    render () {
        return (
            <div className="game">
            <div className="game-board">
                <Board />
            </div>
                <div className="game-info"> </div>
                </div>
        );
    }
}


//===============================
ReactDOM.render(
    <Game />,
    document.getElementById('root')
)