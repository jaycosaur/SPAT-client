import React from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'

class SummaryQueryCard extends React.Component {
    render() {
        const vendorSelected = this.props.filters.vendors.items.length !== 0
        const singleSelected = vendorSelected&&this.props.filters.vendors.items.length===1
        const multipleVendors = vendorSelected&&this.props.filters.vendors.items.length>1
        return (
            <Card style={{background: 'rgb(159,193,69)'}}>
                <h1 style={{color: "#fff"}}>{!vendorSelected?"ALL":
                    (singleSelected?this.props.filters.vendors.items:"Multiple")
                }</h1>
                <h3 style={{color: "#eee"}}>
                    {`Supplier${!vendorSelected||multipleVendors?"s":""} Selected`}
                </h3>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.dashboard.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryQueryCard)