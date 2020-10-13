import React from 'react';


export default class Addoptions extends React.Component{
    state={error: undefined}
    
    HandleAddOption= (x)=> {                     //this is for wiring up the form nd input,
        x.preventDefault();                //holding the value nd argument,
        
        const valueholder = x.target.elements.actionID.value.trim();
        const error = this.props.handleAddOption(valueholder)

        this.setState(()=>{
            return{ error: error}
        })

        // to clear the input bar after u have hit d addedoption/added an option 
        if(!error){
            x.target.elements.actionID.value=''
        };  
    }
    render(){
        return(
            <div>
            {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
            <form className='add-option__form' onSubmit={this.HandleAddOption}>
            <input className='add-option__input' type='text'  name='actionID' />
            <button className='button' >Add Option</button>
            </form>
            </div>
        )
    };
};
