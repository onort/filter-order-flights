/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./App.module.scss"
import { fetchData, FetchDataAction } from "./redux/actions"
import { ApplicationState } from "./redux/reducers"
import {
  FiltersState,
  FilteringOptions,
  Itinerary,
  OrderingOption
} from "./types"
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
import { formatData, orderByDate, orderByPrice } from "./utils"

const orderingOptions = [
  { text: "Ucuzdan Pahalıya", value: "minPrice" },
  { text: "Pahalıdan Ucuza", value: "maxPrice" },
  { text: "Tarihe Göre Yakın", value: "closest" },
  { text: "Tarihe Göre Uzak", value: "farthest" }
]

interface State {
  activeIndex: number
  dataToShow: Itinerary[]
  selectedOrder: OrderingOption
  totalFlights: number
  totalPages: number
}

interface PropsFromDispatch {
  fetchData: typeof fetchData
}

interface PropsFromState {
  filteringOptions: FilteringOptions
  filters: FiltersState
  itineraries: Itinerary[]
}

type Props = PropsFromDispatch & PropsFromState

class App extends Component<Props, State> {
  public itemsPerPage: number = 10

  public state = {
    activeIndex: 1,
    dataToShow: [],
    selectedOrder: orderingOptions[0],
    totalFlights: 0,
    totalPages: 1
  }

  public componentDidMount() {
    this.props.fetchData()
  }

  public componentDidUpdate(prevProps: Props) {
    if (
      prevProps.itineraries.length !== this.props.itineraries.length ||
      prevProps.filters !== this.props.filters
    ) {
      this.setState({ activeIndex: 1 }, () => this.getDataToShow())
    }
  }

  public handleOrderChange = (value: string) => {
    const selectedOrder = orderingOptions.find(option => option.value === value)
    if (selectedOrder && selectedOrder.value) {
      this.setState({ selectedOrder }, () => this.getDataToShow())
    }
  }

  public handlePagintionClick = (page: number) => {
    this.setState({ activeIndex: page })
    // TO DECIDE: Scroll to ResultsTable instead of 0?
    window.scrollTo(0, 0)
  }

  public filterData = (dataToFilter: Itinerary[]): Itinerary[] => {
    const filteredData = dataToFilter
      .filter(itienary =>
        itienary.carriers.some(carrier =>
          this.props.filters.airlines.includes(carrier.id)
        )
      )
      .filter(itienary => this.props.filters.stops.includes(itienary.stopsType))
      .filter(itienary => itienary.lowestPrice <= this.props.filters.maxPrice)
      .filter(itienary => itienary.duration <= this.props.filters.maxDuration)
    this.setState({
      totalFlights: filteredData.length,
      totalPages: Math.ceil(filteredData.length / this.itemsPerPage)
    })
    return filteredData
  }

  public orderData = (dataToOrder: Itinerary[]): Itinerary[] => {
    switch (this.state.selectedOrder.value) {
      case "minPrice":
        return orderByPrice(dataToOrder, 1)
      case "maxPrice":
        return orderByPrice(dataToOrder, -1)
      case "closest":
        return orderByDate(dataToOrder, 1)
      case "farthest":
        return orderByDate(dataToOrder, -1)
      default:
        return dataToOrder
    }
  }

  public getDataToShow = (): Itinerary[] => {
    const { activeIndex } = this.state
    const dataOrdered: Itinerary[] = this.orderData(
      this.filterData(this.props.itineraries)
    )
    const dataToShow = dataOrdered.slice(
      (activeIndex - 1) * this.itemsPerPage,
      activeIndex * this.itemsPerPage
    )
    this.setState({ dataToShow })
    return dataToShow
  }

  public render() {
    // console.log(data.result.Itineraries.find(d => d.Filter.Carriers.length > 1))
    console.log(
      data.result.Itineraries.find(i => i.OutboundLegId.Segments.length === 2)
    )
    // console.log("Format Data", formatData(data.result.Itineraries))
    const {
      activeIndex,
      dataToShow,
      selectedOrder,
      totalFlights,
      totalPages
    } = this.state

    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults
          flightCount={totalFlights}
          onOrderSelect={this.handleOrderChange}
          orderingOptions={orderingOptions}
          selectedOrder={selectedOrder}
        />
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
  filters,
  itineraries
}: ApplicationState) => ({
  filteringOptions,
  filters,
  itineraries
})

const mapDispatchToProps = (dispatch: Dispatch<FetchDataAction>) => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
