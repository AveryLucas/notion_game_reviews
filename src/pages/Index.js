import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  tempRenderLink(i) {
    let names = ["Ikenfell"];
    let images = [854940, 1240440, 1794680, 1484720];
    // function rngApp(){}
    return (
      <div className="doop">
        <h3>Ikenfell Review</h3>
        {/* <div/> */}
        <div
          className="img"
          style={{
            backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/steam/apps/${images[
              i
            ]}/header.jpg)`
          }}
        >
          <div />
        </div>
        <p>
          It may not reach the sublime heights of its predecessor, but Doom
          Eternal is bursting at the seams with hellacious action.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="list">
            <h1>reviews.</h1>
            <h2>recently reviewed.</h2>
            {this.tempRenderLink(0)}
            {this.tempRenderLink(1)}
            {this.tempRenderLink(2)}
            {this.tempRenderLink(3)}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
