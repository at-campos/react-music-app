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
            <header className="header">
                <h1 className="header__title">{this.props.appName}</h1>
            </header>
        )
    }
}

export default Header;