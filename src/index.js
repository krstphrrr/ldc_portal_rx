import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './components/header/HeaderNav'

class App extends React.Component {
   
    
    render (){
        return (
          <div>
            
            <Menu></Menu>
          </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
