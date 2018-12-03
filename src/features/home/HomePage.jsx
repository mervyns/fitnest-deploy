import React from 'react';

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="/assets/logo.png" alt="logo" />
            <div className="content">FitNest</div>
          </h1>
          <h2>Your Online-To-Offline Fitness Community</h2>
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        Site made by{" "} 
        <a href="https://github.com/mervyns" title="Mervyn's Github">
          Mervyn Tan
        </a>
      </div>
    </div>
  );
};

export default HomePage;
