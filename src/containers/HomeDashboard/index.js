import View from './view'

import * as datasetActions from '../../store/actions/datasetActions'
import * as informationActions from '../../store/actions/informationActions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop,
        isLoadingDatasets: state.datasets.isFetching,
        datasets: state.datasets.datasets,
        information: state.information
    }
}


export default connect(mapStateToProps, {...datasetActions, ...informationActions})(View)

//export default withDataLoader(View, "/datasets")