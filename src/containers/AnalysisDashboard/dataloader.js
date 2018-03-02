import React, { Component, createContext } from 'react'

export const DataContext = createContext()

export class DataLoader extends Component {
    state = {
        actions: (e) => console.log(e)
    }

    render() {
        return (
        <DataContext.Provider value={this.state}>
            {this.props.children}
        </DataContext.Provider>
        )
    }
}
