import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, setTermList, fetchTranslateGif } from '../store';


class Input extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.state = {
            text: '',
            method: true
        }
    }

    handleInputChange(ev) {
        ev.preventDefault();
        this.setState({text: ev.target.value});
    }

    handleTranslate(ev) {
        ev.preventDefault();
        this.props.changeInput(this.state.text, ev.target.method.value);
    }

    handleClear() {
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="input-component">
                <form onSubmit={this.handleTranslate}>
                    <select name='method' required>
                        <option value={true}>by Word</option>
                        <option value={false}>by Sentence</option>
                    </select>
                    <button type='submit'>Translate</button>
                    <button onClick={this.handleClear}>Clear</button>
                    <textarea className='input-box' onChange={this.handleInputChange} value={this.state.text} placeholder='Type your text here. Choose either translate word by word or sentence by sentence'/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    input: state.input,
    selectedTerm: state.translate.term
})

const mapDispatchToProps = (dispatch) => ({
    changeInput(text, bool) {
        let regex = bool ? /\w+/g : /[^\.!\?]+[\.!\?]+/g; //if bool === true, translate by word; else, translate by sentence
        let termList = text.match(regex);
        let a = bool? 1 : 2;
        console.log(a);
        dispatch(setInput(text));
        dispatch(setTermList(termList));
        dispatch(fetchTranslateGif(termList[0]));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
  
