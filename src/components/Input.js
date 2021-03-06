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
        let termList = bool === 'true' ? text.match(/\w+/g) : text.replace(/"|"/g, '').match(/[^,.!?\s]([a-zA-Z0-9_'])*(\s[a-zA-Z0-9_']+)*/g);
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
                <form onSubmit={this.handleTranslate} className="form-inline">
                    <select name='method' className="form-control input-buttons form-select" required>
                        <option value={true}>by Word</option>
                        <option value={false}>by Sentence</option>
                    </select>
                    <button className="btn btn-primary input-buttons" type='submit'>Translate</button>
                    <button className="btn btn-primary input-buttons" onClick={this.handleClear}>Clear</button>
                    <textarea className='input-box' onChange={this.handleInputChange} value={this.state.text} placeholder='Type here. Choose either translate by word or by sentence. Select term for translation from your paragraph by clicking on the left or right arrow below.'/>
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
  
