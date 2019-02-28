/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./App.module.scss"
import { fetchData, FetchDataAction } from "./redux/actions"
import { ApplicationState } from "./redux/reducers"
import {
  Filters,
  Footer,
  Header,
  OrderResults,
  Results,
  SearchBar
} from "./components"
import data from "./data/mockData.json"
import { formatData, FilteringOptions, Itinerary } from "./utils"

// TODO: Add typings for filteringOptions & itineraries
interface PropsFromDispatch {
  fetchData: typeof fetchData
}

interface PropsFromState {
  filteringOptions: FilteringOptions | {}
  itineraries: Itinerary[]
}

type Props = PropsFromDispatch & PropsFromState

class App extends Component<Props> {
  public componentDidMount() {
    this.props.fetchData()
  }
  public render() {
    console.log(data.result.Itineraries.find(d => d.Filter.Carriers.length > 1))
    console.log(data.result.Carriers)
    console.log("Format Data", formatData(data.result.Itineraries))
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults flightCount={25} />
        <div className={styles.main}>
          <Filters />
          <Results />
        </div>
        <SearchBar type="secondary" />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({
  filteringOptions,
  itineraries
}: ApplicationState) => ({
  filteringOptions,
  itineraries
})

const mapDispatchToProps = (dispatch: Dispatch<FetchDataAction>) => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
