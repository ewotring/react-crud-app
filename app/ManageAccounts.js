import React from 'react'
import ReactDOM from 'react-dom'
import AccountList from './AccountList.js';
import NewAccount from './NewAccount.js';
import FilterAndAdd from './Filter.js';
import ModifyAccount from './ModifyAccount.js';
export default class ManageAccounts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <FilterAndAdd />
        <AccountList />
        <NewAccount />
        <ModifyAccount />
      </div>
    );
  }
}
