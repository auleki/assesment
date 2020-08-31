import React from 'react';

const Source = ({ Info, url, source }) => {
    return (
      <div className="source">
        <img src={Info} alt="info icon"/>
        <p>
          Sourced by <a 
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                        >
                        {source}
                      </a>
        </p>

      </div>
    );
  }

export default Source