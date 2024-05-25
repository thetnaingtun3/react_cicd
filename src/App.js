import React from 'react';

export default class Home extends React.Component{
  
  render(){
    return(
      <React.Fragment>
        <div className="flex justify-center">
          <div className="md:w-1/2 bg-gray-900 rounded-lg p-5 m-10">
            <div className="text-center">
              <p className="text-l md:text-2xl text-white">Real Time Tweet Fetcher  - [WIP]</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}