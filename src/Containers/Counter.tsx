import React, {  PureComponent } from 'react'
import Button from '../Components/Button';
 
interface ICounter {
    counter: number
}

export  class Counter extends PureComponent {
    state = {
        counter: 0
    }

    decrement = () => {
        this.setState({counter: this.state.counter-1})
    }
    
    increment = () => {
        this.setState({counter: this.state.counter+1})
    }
    
    render() {
        const {counter} = this.state;
        return (
            <div>
                <Button label="DECREMENT" handleClick={this.decrement} />
                <p>Counter: {counter} </p>
                <Button label="INCREMENT" handleClick={this.increment}/>
            </div>
        )
    }
}
