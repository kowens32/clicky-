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
}




//===============================
React.DOM.render(
    <Game />
    document.getElementById('root')
)