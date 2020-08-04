import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            textContent: "",
            names: ["Sree", "Sandra", "Nandu"]
        }
    }

    plus = ()=>{
        this.setState((prev, props)=>({
            counter: prev.counter+1
        }))
    }

    minus = ()=>{
        this.setState((prev, props)=>({
            counter: prev.counter-1
        }))
    }

    text = (e)=>{
        this.setState({ textContent: e.target.value})
    }

    render(){
        return(
            <div>
                <button onClick={ this.plus }>+</button>
                <button onClick={ this.minus }>-</button>
                <p>You clicked {this.state.counter} times</p>
                <input type="text" onChange={this.text}/>
                <p>{this.state.textContent}</p>
                <ul>
                    {this.state.names.map((item, key)=>{
                        return(
                            <li>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Counter; 