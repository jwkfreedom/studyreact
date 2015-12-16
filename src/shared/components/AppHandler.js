import React from "react";
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const FlatButton = require('material-ui/lib/flat-button');
const NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
export default class AppHandler extends React.Component {  
  render() {
    return <div>
    <AppBar
  title={<span>Title</span>}
  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  iconElementRight={<FlatButton label="Save" />} />
    <h1>Hello App Handler4</h1></div>;
  }
}