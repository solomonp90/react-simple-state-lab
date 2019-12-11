import React, { Component } from 'react';

export default class Cell extends Component{

    state = {
        color:this.props.value
    }

    
    onClick = () => {
       console.log("abc") 
       this.setState({
           color: '#333'
       })
    }
    

    render(){

        return(
            <div className="cell" style={{backgroundColor: this.state.color }} onClick={this.onClick}>
                {/* {console.log(this.props)} */}
            </div>
        )
    }

}