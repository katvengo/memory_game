import React from "react";

const styles = {
  title: {
    fontFamily: 'Krona One', 
  },
  subtitle: {
    fontFamily: 'Acme', 
    fontSize: 25,
    color: 'black',
  
  },
  span: {
    paddingLeft: 25,
    paddingRight: 10
  }

};
const Navbar = props => {
        return ( 
<>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/" style={styles.subtitle}>
ClickyGame      </a>

        </div>
      </div>


    <div className="navbar-end">
      <div className="navbar-item" style={styles.subtitle}>
         <span style={styles.span}>Score: {props.count} </span>
         <span style={styles.span}>Highest Score:</span>
      </div>
    </div>
</nav>
</>
    );
    }
 
export default Navbar;