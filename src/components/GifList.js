import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from './GifItem';


class GifList extends Component {

    render() {
        
        let list = this.props.gifs.slice(1);
        if(this.props.gifs.length > 1) {
            return (
                
                <div className='gif-grid'>
                    {
                        list && list.length !== 0 ?
                        list.map(image => <GifItem key={image.id} 
                                                image={image}
                                                main={false}
                                                />) : 
                        null
                    }
                </div>
            );
        } else {
            return null;
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs,
    }
}

export default connect(mapStateToProps, null)(GifList);
  
