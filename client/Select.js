import React, { useState, Component } from "react";
import Animal from './Animal.js';

class Select extends React.Component {
  state = {
    selectData: this.initSelect(this.props.width)
  }

  // creates an array of specified width, this reuses the animal object, which isn't entirely necessary, but does work
  initSelect(width) {

    let selectData = [];

    for (let i = 0; i < width; i++) {

      let select = new Animal("select", 3);

      selectData[i] = {

        data: select
      }

    }
    return selectData;
  }

  //sets all of the selections to unselected, and then sets the selection to read as "selected", then forces an update
  makeSelection(selection) {


    let newSelect = this.state.selectData.map((selector, index) => {

      selector.data.name = " ";

      return selector;
    })

    newSelect[selection].data.name = "selecting";

    this.setState({

      selectData: newSelect
    })


    this.forceUpdate();
  }

  //returns an array of html divs that display the name of the selector
  render() {
    return <div>{

      this.state.selectData.map((selector, index) => {

        return (<div className="selector" onClick={() => this.makeSelection(index)}>

          {selector.data.name}
        </div>
        )
      })
    }</div>
  }
}

export default Select;