import React from 'react';
import Card from './Card/card'
import michael from "../michael.json"
import Navbar from "./navbar"
import Hero from "./hero"

class Rows extends React.Component {

    state = { 
        michael: '',
        count: 0,
        totalScores: [],
        clicked: false
     }
     //Doesn't work
     //alerts the user when they win the game 
     checkForWinner = () => {
       if(this.state.count === 12) {
         alert("You win! Click ok to play again")
       }
     }

     //track scores. Keep a total of all scores and post the highest



     handleCount = () => {
        this.setState({ count: this.state.count + 1 });
      };

      //Doesn't work
      //reset game by changing all boolean values of clicked to false
       resetClicked = (event, clicked) => {
        michael.forEach(function(imageObject){
        if(imageObject.image === event.target.src){
        this.setState({
          [clicked]: false
        })
        }
      })
    }

      resetGame = () => {
        this.setState({count: 0})
      }
    
    handleClickEvent = event => {
       event.preventDefault()
     const findId = michael.find(imageObject => imageObject.image === event.target.src)
    if (findId.clicked === false){
      this.handleCount()
      this.checkForWinner()
      console.log(this.state.count)
      findId.clicked = true
      this.shuffledArray(michael)
    } else if (findId.clicked === true){
      alert("Incorrect Answer!")

      // var score = this.state.count

      // this.resetClicked()
      this.resetGame()
      michael.forEach(() => michael.clicked = false)
      this.shuffledArray(michael)
    }
    return 
   }


     shuffledArray = array => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }


    render() { 
        return ( 
            <>

        <Navbar 
          count={this.state.count} 
          />
        <Hero />
        <div className ="container is-fluid">
        <div className ="columns is-centered is-multiline">
  
        {this.shuffledArray(michael).map(michael => ( 
        <div className ="column" key={michael.id}>
            <Card 
            id={michael.id}
            image={michael.image}
            onClick={this.handleClickEvent}
            />
            
            </div>
            ))}
            </div>
        </div>
        </>
);
    }
}

export default Rows;

//Almost there!! 


//I need to keep track of all of the scores and only output the highest score
//state => Need a totalScores: [] array. Before the game resets push the count number
//into the totalScores array. Then use a function to figure out the highest number (go to code challenges for options)


