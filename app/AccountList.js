import React from 'react';
export default class AccountList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Account</th>
            <th>User Id</th>
            <th>Password</th>
            <th></th>
          </tr>
        </thead>
      </table>
    );
  }
}
