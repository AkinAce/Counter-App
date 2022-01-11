import React, { Component } from 'react';

//This could be defined as a stateless functional component due to lack of functions or a state
// created by typing sfc
//choice is due to personal preference. difference is props will be passed in the object and "this" removed in props.totalCounters

/*const NavBar = (props) => {
  return (<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbars <span className="badge bg-pill bg-secondary">{props.totalCounters}</span>
    </a>
  </div>
  
</nav>  );
}
 
export default NavBar;*/



class NavBar extends React.Component {
    render() { 
        return (<nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbars <span className="badge bg-pill bg-secondary">{this.props.totalCounters}</span>
          </a>
        </div>
        
      </nav>);
    }
}
 
export default NavBar;