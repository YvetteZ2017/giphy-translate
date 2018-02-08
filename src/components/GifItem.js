import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../store';

class GifItem extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev, image) {
        ev.preventDefault();
        this.props.clickGifItem(image);
    }

    render(){
        let { image, main } = this.props;
        return(
            <div className='gif-item'>
            {
                main ? 
                <img src={image.images.original.url} alt={image.title} onClick={(ev) => this.handleClick(ev, image)}/> :
                <img src={image.images.fixed_width.url} alt={image.title} onClick={(ev) => this.handleClick(ev, image)}/>
            }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    clickGifItem(image) {
        dispatch(openModal(image));
    },
});

export default connect(null, mapDispatchToProps)(GifItem);
  
  
