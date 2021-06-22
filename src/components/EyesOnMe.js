// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
render(){

      onFocus = () => console.log('Good!')
      onBlur = () => console.log('Hey! Eyes on me!')

        return (
        <button onFocus={this.onFocus()} onBlur={this.onBlur()}></button>
        )}
 }