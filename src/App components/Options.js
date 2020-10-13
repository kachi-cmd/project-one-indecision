import React from 'react';

const Options=(props)=>{
    return(
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__margin'>Your Options </h3>
        <button 
        className='button button--link'
        onClick={props.handleDeleteOptions}
        >
        Remove all
         </button>
        </div>
        {props.MyOptions.length === 0 && <p className='widget__message'
        >
        Please add an option to get started</p>}
          {
             props.MyOptions.map((MyOptions, index)=>{
          return (
          <Option 
            key={MyOptions} 
            optionstext={MyOptions}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption} />
          )
             })
          }
        </div>
    )
};

const Option=(props)=>{
    return(
        <div className='options'>
        <p className='options__text'> {props.count} . {props.optionstext} </p>
        <button 
        className='button button--link'
        onClick={
         (e)=>{props.handleDeleteOption(props.optionstext)} }
        >
        Delete
        </button>
        </div>
    )
};
export default Options;