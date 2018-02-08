import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
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
            <form>
                <input onChange={this.handleInputChange} value={this.state.text}/>
                <button onClick={this.handleTranslate}>Translate</button>
            </form>
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
  
