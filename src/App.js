import React from 'react';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import s from "./App.module.scss"


class App extends React.Component {

  state={
    openFirstModal:false,
    openSecondModal:false
  }

  onFirstModalClick =()=>{
    this.setState({
      openFirstModal:true

    })
  }
  onSecondModalClick =()=>{
    this.setState({
      openSecondModal:true
    })
  }
  closeModal =()=>{
    this.setState({
      openFirstModal:false
    })
  }
  closeSecondModal =()=>{
    this.setState({
      openSecondModal:false
    })
  }
  onBackDropClose =(e)=>{
    if(e.target.dataset.value==="backdrop"){
      this.closeModal()
      this.closeSecondModal()
    }
  }

  render(){
   return ( 
    <div className={s.wrapper}>
      <Button text={"Open first modal"} color={'#97958e'} onClick={this.onFirstModalClick}></Button>
      <Button text={"Open second modal"} color={'#808073'} onClick={this.onSecondModalClick}></Button>
      {this.state.openFirstModal&& <Modal header={"It is modal"} closeButton={true} text={"In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window."} onClick={this.closeModal} onBackDropClose={this.onBackDropClose}></Modal>}
      {this.state.openSecondModal&& <Modal header={"It is second modal"} closeButton={true}  text={"A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application."} onClick={this.closeSecondModal} onBackDropClose={this.onBackDropClose}></Modal>}

      
      </div>)

      
      
  }
  
}

export default App;
