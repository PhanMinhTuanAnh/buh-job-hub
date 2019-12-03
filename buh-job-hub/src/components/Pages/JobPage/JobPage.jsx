import React, { Component } from 'react'
import TitleBar from './TitleBar/TitleBar'
import Content from './Content/Content'

export default class JobPage extends Component {
  render() {
    return (
      <div>
        <div className="clearfix" />
        {/* Titlebar */}
        <TitleBar />
        <div className="container">
          {/* Content*/}
          <Content />
        </div>
      </div>
    );
  }
}
