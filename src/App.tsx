/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./App.module.scss"
import { fetchData, FetchDataAction } from "./redux/actions"
import { ApplicationState } from "./redux/reducers"
import { FilteringOptions, Itinerary, OrderingOption } from "./types"
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
  selectedOrder: OrderingOption
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
    selectedOrder: orderingOptions[0],
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

  public handleOrderChange = (value: string) => {
    const selectedOrder = orderingOptions.find(option => option.value === value)
    if (selectedOrder && selectedOrder.value) {
      this.setState({ selectedOrder })
    }
  }

  public handlePagintionClick = (page: number) => {
    this.setState({ activeIndex: page })
    // TO DECIDE: Scroll to ResultsTable instead of 0
    window.scrollTo(0, 0)
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
    const dataOrdered: Itinerary[] = this.orderData(this.props.itineraries)
    const dataToShow = dataOrdered.slice(
      (activeIndex - 1) * this.itemsPerPage,
      activeIndex * this.itemsPerPage
    )
    return dataToShow
  }

  public render() {
    // console.log(data.result.Itineraries.find(d => d.Filter.Carriers.length > 1))
    // console.log(
    //   data.result.Itineraries.find(i => i.OutboundLegId.Segments.length > 1)
    // )
    // console.log("Format Data", formatData(data.result.Itineraries))
    const { activeIndex, selectedOrder, totalPages } = this.state
    const dataToShow = this.getDataToShow()
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults
          flightCount={this.props.itineraries.length}
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
