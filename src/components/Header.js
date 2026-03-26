import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("App cargada correctamente");
    }

    render(){
        return(
            <header>
                <h1>{this.props.appName}</h1>
                <div className="header__vanity"></div>
            </header>
        )
    }
}

export default Header;