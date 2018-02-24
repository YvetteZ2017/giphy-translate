import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput, setTermList, fetchTranslateGif } from '../store';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.generateList = this.generateList.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleInputChange(ev) {
        ev.preventDefault();
        this.setState({text: ev.target.value});
    }

    handleTranslate(ev) {
        ev.preventDefault();
        this.generateList(ev.target.method.value, this.state.text);
        
    }

    generateList(bool, text) {
        const regex = bool === 'true' ? /\w+/g : /([^,.!?\s](\w|\d)+(\s(\w|\d)+)*)/g; //if bool === true, translate by word; else, translate by sentence
        let termList = text.match(regex);
        if(!termList) {
            termList = [text];
        }
        this.props.changeInput(this.state.text, termList);
    }

    handleClear() {
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="input-component">
                <form onSubmit={this.handleTranslate}>
                    <select name='method' className="input-buttons" required>
                        <option value={true}>by Word</option>
                        <option value={false}>by Sentence</option>
                    </select>
                    <button className="input-buttons" type='submit'>Translate</button>
                    <button className="input-buttons" onClick={this.handleClear}>Clear</button>
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
    changeInput(text, termList) {
        dispatch(setInput(text));
        dispatch(setTermList(termList));
        dispatch(fetchTranslateGif(termList[0]));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
  
