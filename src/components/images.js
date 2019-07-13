import React from 'react';

class Images extends React.Component {
    state = { 
        count: 0
     }

     handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
      };

    handleOnClick = event => {
    //
    }

    render() { 
        return ( 
            <>
            <img src ="" alt="michael scott" id=""/>
            </>
         );
    }
}
 
export default Images