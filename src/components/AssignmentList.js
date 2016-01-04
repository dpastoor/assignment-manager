import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, List} from 'material-ui';
import {Assignment} from './Assignment';


export default class AssignmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{
        flexGrow: 1,
        minWidth: '10vw',
        overflowY: 'auto'
      }} >
        <List>
          <div style={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
           }}>
            Assignment List
          </div>
          Assignments...
          <Assignment name="testUser" />
        </List>
      </Card>
    );
  }
}



