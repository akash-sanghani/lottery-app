import React from 'react';

const Stats = () => {
  // Fetch and display aggregate stats
  return (
    <div>
      <h2>Stats</h2>
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example Stat</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;