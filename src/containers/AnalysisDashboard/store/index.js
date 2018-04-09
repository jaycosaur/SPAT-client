import React, { Component, createContext } from 'react'

export const DashboardContext = createContext()

export const DashboardConsumer = DashboardContext.Consumer

export class DashboardProvider extends Component {
    state = {
        actions: {
            log: (e) => console.log(e),
            categorySelect: e => this.categorySelect(e),
            categoryDeselect: e => this.categoryDeselect(e),
            categoryDeselectAll: () => this.categoryDeselectAll()
        },
        datasetId: 'test',
        filter: {
            category: []
        }
    }

    categorySelect = (e) => {
        console.log('Category Selected: ', e)
        this.setState((state, props)=>{
            return {
                filter: {
                    ...state.filter,
                    category: [...state.filter.category, e.value.point.category]
                }
            }
        })
    }

    categoryDeselect = (e) => {
        console.log('Category Selected: ', e.type, e.index)
        console.log(this.state.filter[e.type])
        /*this.setState((state, props)=>{
            return {
                filter: {
                    ...state.filter,
                    [e.type]: state.filter.category.splice(e.index,1)
                }
            }
        })*/
        console.log(this.state.filter[e.type].splice(e.index))
    }

    categoryDeselectAll = () => {
        console.log('Category Deselected')
        this.setState((state, props)=>{
            return {
                filter: {
                    ...state.filter,
                    category: []
                }
            }
        })
    }

    render() {
        return (
        <DashboardContext.Provider value={this.state}>
            {this.props.children}
        </DashboardContext.Provider>
        )
    }
}
