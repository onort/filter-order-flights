/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./Filters.module.scss"
import { ApplicationState } from "../../redux/reducers"
import {
  selectAllAirlines,
  selectAllClasses,
  selectAllStops,
  setDurationFilter,
  setPriceFilter,
  toggleAirlineFilter,
  toggleClassFilter,
  toggleStopFilter
} from "../../redux/actions"
import { Card, CheckBox, FilterSection, Slider } from "../"
import { FilteringOptions, FiltersState } from "../../types"

interface PropsFromState {
  filteringOptions: FilteringOptions
  filters: FiltersState
}

interface PropsFromDispatch {
  allAirlines: typeof selectAllAirlines
  allClasses: typeof selectAllClasses
  allStops: typeof selectAllStops
  setDuration: typeof setDurationFilter
  setPrice: typeof setPriceFilter
  toggleAirline: typeof toggleAirlineFilter
  toggleClass: typeof toggleClassFilter
  toggleStop: typeof toggleStopFilter
}

type Props = PropsFromState & PropsFromDispatch

class Filters extends Component<Props> {
  public handleAirlineChange = (val: number) => this.props.toggleAirline(val)

  public handleClassChange = (val: string) => this.props.toggleClass(val)

  public handleStopChange = (val: string) => this.props.toggleStop(val)

  public handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.setDuration(+e.target.value)

  public handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.setPrice(+e.target.value)

  public handleSelectAllAirlines = () =>
    this.props.allAirlines(
      this.props.filteringOptions.airlines.map(airline => airline.id)
    )

  public handleSelectAllClasses = () => this.props.allClasses()

  public handleSelectAllStops = () => this.props.allStops()

  public render() {
    const {
      airlines,
      durationRange,
      priceRange,
      stops
    } = this.props.filteringOptions
    const {
      airlines: airlineFilters,
      classes,
      maxDuration,
      maxPrice,
      stops: stopFilters
    } = this.props.filters
    return (
      <aside className={styles.container}>
        <Card>
          <FilterSection
            title="Aktarma"
            canSelectAll={true}
            onSelectAll={this.handleSelectAllStops}
          >
            {stops.direct > 0 && (
              <CheckBox
                label="Sadece Aktarmasız"
                onChange={this.handleStopChange.bind(this, "direct")}
                checked={stopFilters.includes("direct")}
              />
            )}
            {stops.singleStop > 0 && (
              <CheckBox
                label="1 Aktarma"
                onChange={this.handleStopChange.bind(this, "singleStop")}
                checked={stopFilters.includes("singleStop")}
              />
            )}
            {stops.multipleStops > 0 && (
              <CheckBox
                label="2+ Aktarma"
                onChange={this.handleStopChange.bind(this, "multipleStops")}
                checked={stopFilters.includes("multipleStops")}
              />
            )}
          </FilterSection>
          <FilterSection
            title="Sınıf"
            canSelectAll={true}
            onSelectAll={this.handleSelectAllClasses}
          >
            <CheckBox
              label="Ekonomi"
              onChange={this.handleClassChange.bind(this, "economy")}
              checked={classes.includes("economy")}
            />
            <CheckBox
              label="Business"
              onChange={this.handleClassChange.bind(this, "business")}
              checked={classes.includes("business")}
            />
            <CheckBox
              label="Kurumsal"
              onChange={this.handleClassChange.bind(this, "corporate")}
              checked={classes.includes("corporate")}
            />
          </FilterSection>
          <FilterSection title="Max Fiyat">
            <Slider
              min={priceRange.min}
              max={priceRange.max}
              onChange={this.handlePriceChange}
              currentValue={maxPrice}
            />
          </FilterSection>
          <FilterSection title="Max Uçuş Süresi">
            <Slider
              min={durationRange.min}
              max={durationRange.max}
              onChange={this.handleDurationChange}
              currentValue={maxDuration}
            />
          </FilterSection>
          <FilterSection
            title="Havayolu"
            canSelectAll={true}
            onSelectAll={this.handleSelectAllAirlines}
          >
            {airlines.map(airline => (
              <CheckBox
                key={airline.id}
                label={airline.name}
                onChange={this.handleAirlineChange.bind(this, airline.id)}
                checked={airlineFilters.includes(airline.id)}
              />
            ))}
          </FilterSection>
        </Card>
      </aside>
    )
  }
}

const mapStateToProps = ({ filteringOptions, filters }: ApplicationState) => ({
  filteringOptions,
  filters
})

const mapDispatchToPtops = (dispatch: Dispatch) => ({
  allAirlines: (airlines: number[]) => dispatch(selectAllAirlines(airlines)),
  allClasses: () => dispatch(selectAllClasses()),
  allStops: () => dispatch(selectAllStops()),
  setDuration: (val: number) => dispatch(setDurationFilter(val)),
  setPrice: (val: number) => dispatch(setPriceFilter(val)),
  toggleAirline: (val: number) => dispatch(toggleAirlineFilter(val)),
  toggleClass: (val: string) => dispatch(toggleClassFilter(val)),
  toggleStop: (val: string) => dispatch(toggleStopFilter(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToPtops
)(Filters)
