import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';


class GifList extends Component {

    render() {
        let list = this.props.gifList;
        return (
            <div>
                {
                    list.length && list.map(image => <ul key={image.id}><img src={image.url} /></ul>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gifList: state.gifList,
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     // changeInput(text) {
//     //     dispatch(setInput(text));
//     // },
// });

export default connect(mapStateToProps, null)(GifList);
  
