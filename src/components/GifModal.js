import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../store';

const GifModal = (props) => {
	return (
		<Modal
			isOpen={ props.modalIsOpen }
			shouldCloseOnOverlayClick={true}
			style={modalStyle}
			onRequestClose={props.clickToColse}>
			{
				props.selectedImg ?
			<div>
			<img src={ props.selectedImg.images.original.url} alt={props.selectedImg.title} />
			<a href={ props.selectedImg.url }>View the gif on Giphy.com</a>
			</div> : null
			}
		</Modal>
		);
};

const mapStateToProps = (state) => {
	return {
		modalIsOpen: state.modal.modalIsOpen,
		selectedImg: state.modal.selectedImg
	}
}

const mapDispatchToProps = (dispatch) => ({
    clickToColse() {
        dispatch(closeModal());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GifModal);
Modal.setAppElement(document.getElementById('root'));


const modalStyle = {
	overlay: {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		zIndex: 3,
		position: 'fixed',
		left: 0,
		height: '100%',
		width: '100%',
	},
	content: {
		color: 'black',
		backgroundRepeat: 'no-repeat',
		outline: 'none',
		height: '79.6%',
		width: '62%',
		margin: 'auto',
		zIndex: 3,
		position: 'fixed',
		justifyContent: 'center',
		left: 0,
		border: 0,
	}
}