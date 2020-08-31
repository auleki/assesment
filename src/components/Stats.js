import React from 'react';

const Stats = ({ title, rate, change }) => {
    return (
      <div className="stats">
        <h3 className="title">
          {title}
        </h3>

        <div className="info">
          <p className="percentage">{ rate }</p>
          <span className="change"><ion-icon name="caret-up-outline"></ion-icon>{ change }</span>
        </div>

    </div>
    );
  }

export default Stats