import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements';


export default class Search extends Component {

    state = {
        term: ' '
    };

    onChangeText = (event) => {
        this.setState({term: event});
    };

    onSubmitEditing = () =>{
        alert("button clicked") 
        
    };
    render() {
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
                value={this.state.term}
                
      />
        )
    }
}
