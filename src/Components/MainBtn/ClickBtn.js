import React from 'react';
import './ClickBtn.css';

const ClickBtn = props => {
  return (
    <div>
      <button type="button" className="icon" onClick={props.purchaseHandler}>
        <div className="cloud">
          <div className="puff puff-1"></div>
          <div className="puff puff-2"></div>
          <div className="puff puff-3"></div>
          <div className="puff puff-4"></div>
          <div className="puff puff-5"></div>
          <div className="puff puff-6"></div>
          <div className="puff puff-7"></div>
          <div className="puff puff-8"></div>
          <div className="puff puff-9"></div>
          <div className="puff puff-10"></div>
          <div className="cloud-core"></div>
          <div className="check"></div>
          <div className="arrow">
            <div className="arrow-stem">
              <div className="arrow-l-tip"></div>
              <div className="arrow-r-tip"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ClickBtn;