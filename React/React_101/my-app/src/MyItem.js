import React from "react";

class Item extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            clicks: 0
        }
    }

    clickMe() {
        console.log("you clicked:", this.props.name)
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render(){
        return(
            <div>
                <h1 onClick={() => this.clickMe()} >Hello {this.props.name}</h1>
                <span>{this.state.clicks} clicks on me</span>
            </div>
        )
    }

}

export default Item;