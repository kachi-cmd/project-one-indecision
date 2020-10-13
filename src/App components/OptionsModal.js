import React from 'react';
import Modal from 'react-modal';

const OptionsModal = (props)=>{ 
    return (
  <Modal
  isOpen={!!props.SelectOption}
  onRequestClose={props.removeSelectOption}
  contentLabel="Select Option"
  closeTimeoutMS={200}
  className="modal"
  > 
  <h3 className='modal__title'>Selected Option</h3>
  {props.SelectOption && <p className='modal__body' >{props.SelectOption}</p>}
  <button className='button' onClick={props.removeSelectOption}>OK</button>
  </Modal>    
);
};
export default OptionsModal;