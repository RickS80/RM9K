import React from 'react';

const Table = (props) => {
    return(
      <table>
          <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Covers</th>
            <th>Table</th>
            <th>Contact details</th>
          </tr>
          </thead>
            <tbody>
          <tr>
            <td>8</td>
            <td>Mark Davidson</td>
            <td>4</td>
            <td>35</td>
            <td>07928989892</td>
          </tr>
          <tr>
            <td>8.30</td>
            <td>Albert Smith</td>
            <td>2</td>
            <td>19</td>
            <td>Albert@sas.com</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Larry</td>
            <td>2</td>
            <td>101</td>
            <td>No contacts</td>
          </tr>
          </tbody>
      </table>
    )
}

export default Table;