import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from './GifItem';


class GifList extends Component {

    render() {
        let list = this.props.gifList.slice(1);
        let main = this.props.gifList[0];
        return (
            <div className='gif-grid'>
                {
                    main && <GifItem image={main} main={true} className='main-image'/>
                }
                {
                    list.length !== 0 && list.map(image => <GifItem key={image.id} 
                                                                    image={image}
                                                                    main={false}
                                                                    />)
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

export default connect(mapStateToProps, null)(GifList);
  
