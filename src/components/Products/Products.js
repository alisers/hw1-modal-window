
import React from 'react';
import Card from '../Card/Card';
import s from './Products.module.css'
import Modal from '../Modal/Modal';

class Products extends React.Component{
    
    state={
        openModal:false,
        products:[],
        addedItems:[],
        currentIndex:0,

    }
    onModalClick =(index)=>{
        if(this.state.addedItems.find(item=>item.id===index)){
            alert(`Item is already added`);
            return
        }
        this.setState({
          openModal:true
        })

        

        this.setState({
            currentIndex:index
        })
    

        
            
            
        
        
      }
    
      closeModal =()=>{
        this.setState({
          openModal:false
        })
      }
    
      onBackDropClose =(e)=>{
        if(e.target.dataset.value==="backdrop"){
          this.closeModal()
          
        }
    
        
      }
      onOkClick =()=>{
        this.closeModal()
          const addeItem={
                id: this.state.currentIndex
            }
            this.setState({
                addedItems:[ ...this.state.addedItems, addeItem]
            })
        
        
      }

    

      componentDidMount(){
        fetch('./items.json')
                .then(response=> response.json()).then(data=> this.setState({products:[...data]})).catch(err=>console.log(err))
        
                const items = localStorage.getItem('items');
                const parsedItems = JSON.parse(items);
                if (parsedItems) {
                  this.setState({
                    addedItems: parsedItems,
                  });
                }
        }

componentDidUpdate(prevProps, prevState) {
  if (this.state.addedItems !== prevState.addedItems) {
    localStorage.setItem('items', JSON.stringify(this.state.addedItems));
  }
}



    
    


   render(){
    const {products} = this.state
    return(
    
        <div>
            <h2 className={s.title}>Baracholka</h2>
            {products.length&&(
                
                <ul className={s.list}>
                    
                    {products.map((product,index)=>(
                        
                        <Card key={product.id}  id={product.id} name={product.name} price={product.price} img={product.img} color={product.color} onModalClick={()=> this.onModalClick(index)} accentColor={this.state.addedItems.find(item => item.id===index) ? 'orange':'black' }/>
                            
                        
                    ))}
                </ul>
            )}
            {this.state.openModal && <Modal header={"Your cart"} text={"Are you sure you want to add this item?"} onOkClick={this.onOkClick} closeModal={this.closeModal} onBackDropClose={this.onBackDropClose}/>
} 
        </div>
    )
   }

    
}

export default Products;