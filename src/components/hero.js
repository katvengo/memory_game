import React from 'react';
import Weather from './images/notebook.png'

const styles = {

  hero: {
    backgroundImage: `url(${ Weather })`,
    textAlign: 'center',
  },

  title: {
    fontFamily: 'Krona One', 
  },
  subtitle: {
    fontFamily: 'Acme', 
    fontStyle: 'italic'
  }

};


class Hero extends React.Component {
    state = {  }
    render() { 
        return (  
        <section className="hero" style={styles.hero}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title" style={styles.title}>
         The Dunder Mifflin Memory Game</h1>
            <h2 className="subtitle" style={styles.subtitle}>
            Click on an image to earn points! Don't click the same image twice!
            </h2>
          </div>
        </div>
      </section>);
    }
}
 
export default Hero;