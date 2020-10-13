import React from 'react';

import Addoptions from './Addoption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionsModal from './OptionsModal';


export default class Indecisionapp extends React.Component{
   
    state= {
        MyOptions : [],
        SelectOption : undefined 
    }

    //to reset the list to 'empty'
    handleDeleteOptions= ()=> {
        this.setState(()=>({ MyOptions:[] }));
    };
    // for the individuals options removal 
    handleDeleteOption= (MyOptionsToRemove)=> {
     this.setState((prevState)=>{
            return{
             MyOptions: prevState.MyOptions.filter((MyOptions)=>{
                 return MyOptionsToRemove !== MyOptions
             })
            }
        })
    };  
    // to pick a random option/choice out of the list
    handlepick= ()=> {
        const randomnumber= 
        Math.floor(Math.random() * this.state.MyOptions.length)
        const picker= this.state.MyOptions[randomnumber]
       this.setState(()=>({ SelectOption : picker }));
    };
    //to reset random picking alert to undefined
    removeSelectOption= ()=> {
        this.setState(()=>({SelectOption : undefined}))
    };

    // to push/concat the new val to d old val in myOptions
     handleAddOption= (MyOptions)=> {
         if(!MyOptions)
          {return 'Enter a valid value into add options'}
         else if (this.state.MyOptions.indexOf(MyOptions) >-1){
         return 'This value already exists'}
          
      this.setState((prevState)=>({
         MyOptions: prevState.MyOptions.concat(MyOptions)}))     
};

 //lifecycle methods -> 
    // to read the saved data nd rerender after resetting using setState
    componentDidMount(){
        try {
            const json= localStorage.getItem('options');
            const MyOptions= JSON.parse(json);
         if (MyOptions){
          this.setState(()=>{return{MyOptions:MyOptions}})};
        } 
        catch (e){
            // do nothing 
        };
      };
    // to save the myoptions imputed data to localStorage,the 'if' is to prevent saving empty data
    componentDidUpdate(prevProps,prevState) {
        if (prevState.MyOptions.length !== this.state.MyOptions.length){
           const json= JSON.stringify(this.state.MyOptions);
           localStorage.setItem('options', json);
        }
    };

    render(){
        const title = this.props.title
        const subtitle = 'Put your life in the hands of a computer'
        

        return(
            <div>
            <Header title={title}  subtitle={subtitle} />
          
            <div className='container'>
            <Action
              handlepick={this.handlepick}
              hasOptions={this.state.MyOptions.length > 0}/>

            <div className='widget'>
            <Options
              handleDeleteOptions={this.handleDeleteOptions} 
              MyOptions={this.state.MyOptions}
              handleDeleteOption={this.handleDeleteOption} />
            <Addoptions
              handleAddOption={this.handleAddOption} />
            </div>
            </div>
            
            <OptionsModal 
            SelectOption={this.state.SelectOption}
            removeSelectOption={this.removeSelectOption} />  
            </div>
        )
    };
}; 
