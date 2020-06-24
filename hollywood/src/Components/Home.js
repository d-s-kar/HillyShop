import React from 'react'
import './button.css'
import Auth from './Auth'
class Home extends React.Component{
     state={
         arr:["img/d.jpg","img/a.jpg","img/b.jpg","img/e.jpg","img/c.jpg"],
         counter:0
     }
     
     componentDidMount(){
        setInterval(()=>this.increment(),4000 )   
     }
     decrement=()=>{
         if(this.state.counter==0)
         {
              this.setState({
                  counter:this.state.arr.length-1,
              })
         }
         else
         this.setState({
             counter:this.state.counter%this.state.arr.length-1,
         })
     }
     increment=()=>{
        if(this.state.counter==this.state.arr.length-1)
        {
             this.setState({
                 counter:0
             })
        }
        else
        this.setState({
            counter:this.state.counter%this.state.arr.length+1,
        })
     }
    render(){
        return(
        <>
            <div className="carousel" style={{overflow:'hidden',position:'relative',width:'1365px',
            height:'510px'}}>
                <button onClick={this.decrement} id="arrow1">
            <i className="fas fa-arrow-left" ></i>
            </button>
            <button onClick={this.increment} id="arrow2">
            <i className="fas fa-arrow-right" ></i>
            </button>
            
             <div className="incara">
                <img src={this.state.arr[this.state.counter]} style={{display:'flex',maxWidth:'100%',maxHeight:'100%'}} />
            </div>
            </div>
    
        </>
        )
    }
}

export default Home;