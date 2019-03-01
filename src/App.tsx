/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./App.module.scss"
import { fetchData, FetchDataAction } from "./redux/actions"
import { ApplicationState } from "./redux/reducers"
import { FilteringOptions, Itinerary } from "./types"
import {
  Filters,
  Footer,
  Header,
  OrderResults,
  Results,
  SearchBar,
  Pagination
} from "./components"
import data from "./data/mockData.json"
import { formatData } from "./utils"

interface State {
  activeIndex: number
  totalPages: number
}

interface PropsFromDispatch {
  fetchData: typeof fetchData
}

interface PropsFromState {
  filteringOptions: FilteringOptions
  itineraries: Itinerary[]
}

type Props = PropsFromDispatch & PropsFromState

class App extends Component<Props, State> {
  public itemsPerPage: number = 10

  public state = {
    activeIndex: 1,
    totalPages: Math.ceil(this.props.itineraries.length / this.itemsPerPage)
  }

  public componentDidMount() {
    this.props.fetchData()
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.itineraries.length !== this.props.itineraries.length) {
      this.setState({
        totalPages: Math.ceil(this.props.itineraries.length / this.itemsPerPage)
      })
    }
  }

  public handlePagintionClick = (page: number) => {
    this.setState({ activeIndex: page })
    // TO DECIDE: Scroll to ResultsTable instead of 0
    window.scrollTo(0, 0)
  }

  public render() {
    // console.log(data.result.Itineraries.find(d => d.Filter.Carriers.length > 1))
    // console.log(
    //   data.result.Itineraries.find(i => i.OutboundLegId.Segments.length > 1)
    // )
    // console.log("Format Data", formatData(data.result.Itineraries))
    const { activeIndex, totalPages } = this.state
    const dataToShow = this.props.itineraries.slice(
      (activeIndex - 1) * this.itemsPerPage,
      activeIndex * this.itemsPerPage
    )
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults flightCount={25} />
        {this.props.itineraries.length > 0 && (
          <div className={styles.main}>
            <Filters />
            <Results data={dataToShow} />
            <Pagination
              activeIndex={activeIndex}
              totalPages={totalPages}
              onClick={this.handlePagintionClick}
            />
          </div>
        )}
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
