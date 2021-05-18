import React, { Component } from 'react';
import Modal from './Modal';
import Table from '../Table/Table';
import MyContext from '../../components/contact-service-context';

export default class Contacts extends Component {

  render() {
    return (
      <div>
        <div>
          <Modal {...this.props} ContactService={this.context} />
        </div>
        {<div>
          <Table {...this.props} ContactService={this.context} />
        </div>}
      </div >
    )
  }
}
Contacts.contextType = MyContext;
