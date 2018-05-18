import React,{Component} from 'react';


const me3zieh = (Compo)=>{
  // we don't add a name for the class, it's a class factory 
  return class extends Component{
   render(){
     let x = Math.ceil(Math.random()*10);
     return (
      <div>
         <Compo {...this.props} />
         <h1>Second Element with class based component {x}</h1>
      </div>
    )
   }
  }  
  
}
   


     export default me3zieh;