import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, setWord } from '../store';


class Input extends Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.state = {text: ''}
    }

    handleInputChange(ev) {
        ev.preventDefault();
        this.setState({text: ev.target.value});
    }

    handleTranslate(ev) {
        ev.preventDefault();
        this.props.changeInput(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleTranslate}>Translate</button>
                <form>
                    <input onChange={this.handleInputChange} value={this.state.text} style={{width: '50vh', height: '20vw'}}/>
                </form>
                <div className='input-view'>
                    <p>{this.props.input}</p>
                </div>  
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    changeInput(text) {
        dispatch(setInput(text));
    },
});

export default connect(null, mapDispatchToProps)(Input);
  
