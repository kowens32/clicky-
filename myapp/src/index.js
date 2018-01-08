import React from 'react';
import ReactDOM from 'react-dom';


const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'

};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            images: [
                {
                    name: 'BellatrixLestrange',
                    clicked: false
                },
                {
                    name: 'DracoMalfoy',
                    clicked: false
                },
                {
                    name: 'GinnyWeasley',
                    clicked: false
                },
                {
                    name: 'HermioneGranger',
                    clicked: false
                },
                {
                    name: 'LordVoldemort',
                    clicked: false
                },
                {
                    name: 'NymphadoraLupin',
                    clicked: false
                },
                {
                    name: 'ProfessorAlbusDumbledore',
                    clicked: false
                },
                {
                    name: 'ProfessorMinervaMcGonagall',
                    clicked: false
                },
                {
                    name: 'ProfessorSeverusSnape',
                    clicked: false
                },
                {
                    name: 'RonWeasley',
                    clicked: false
                },
                {
                    name: 'RubeusHagrid',
                    clicked: false
                },
                {
                    name: 'SiriusBlack',
                    clicked: false
                }
            ]
        }
    }


    handleClick(i) {

        const images = this.state.images.slice();
        images[i].clicked ? this.addPoint() : images[i].clicked = true;
        images.sort(function(a, b){return 0.5 - Math.random()})
        this.setState({images: images});

    }

    addPoint() {
  this.state.score++;
  console.log('???',this.state.score);
    }

    render() {
        const status = 'Click game to start!';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="score">{this.state.score}</div>

                <div >
                    {
                        this.state.images.map((image, index) => {
                            return <Square
                                        key={index}
                                        value={image.name}
                                        onClick={() => this.handleClick(index)}
                                   />
                        })
                    }
                </div>
            </div>
        );
    }

}
class Game extends React.Component {
    render () {
        return (
            <div className="game" >
                <div className="game-board">
                    <Board style={divStyle}/>
                </div>
                <div className="game-info"> </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return(
            <button className="square" onClick={() => this.props.onClick()}>
                {<img key={this.props.value} src={require(`./img/${this.props.value}.jpeg`)} alt="" className="img-responsive" />}
            </button>
        );
    }
}

//===============================
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);