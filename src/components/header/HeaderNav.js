import React from 'react'
import './HeaderNav.css'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menu:props.menu,
            mobileMenu: false
        }

    }
    render(){
        return <div className="testbg">
            <div className="textpos">o</div>
            </div>
    }
}

export default Menu