import React, { Component } from 'react';
import Modal from './Modal';
import { Table } from '../Table/Table';

export default class Contacts extends Component {

  render() {
    return (
      <div>
        <div>
          <Modal {...this.props} />
        </div>
        {<div>
          <Table {...this.props} />
        </div>}
      </div >
    )
  }
}
