import React from 'react'

import Header from '../header/HeaderNav'
import MapComponent from '../map/MapComponent'
import './App.css'

export default class AppComponent extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header></Header>
        <div id="mapid">
          <MapComponent></MapComponent>
        </div>
      </React.Fragment>
      
    )
  }
}