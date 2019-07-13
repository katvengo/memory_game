import React from 'react';
import './style.css'


const styles = {
  image: {
    width: 270,
    height: 215
  }
};

function Card(props) {
    return (
      <div key={props.id} className="card cardSpecifyMember">
          <button onClick={props.onClick} id={props.id}>
    <img alt={props.id} src={props.image} style={styles.image} />
     </button>
      </div>
    );
  }
  
export default Card;