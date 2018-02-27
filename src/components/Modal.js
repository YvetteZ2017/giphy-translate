import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../store';

const ModalComp = (props) => {
	return (
		<Modal
			isOpen={ props.modalIsOpen }
			shouldCloseOnOverlayClick={true}
			style={props.modalStyle}
			onRequestClose={props.clickToColse}>
			{
				props.selectedImg ?
			<div className='gif-modal'>
			<img className='modal-image' src={ props.selectedImg.images.original.url} alt={props.selectedImg.title} />
			<a href={ props.selectedImg.url }>View on Giphy.com</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp);
Modal.setAppElement(document.getElementById('root'));
