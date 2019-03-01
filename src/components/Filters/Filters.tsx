/* tslint:disable no-console */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import styles from "./Filters.module.scss"
import { ApplicationState } from "../../redux/reducers"
import { setDurationFilter, setPriceFilter } from "../../redux/actions"
import { Card, CheckBox, FilterSection, Slider } from "../"
import { FilteringOptions, FiltersState } from "../../types"

interface PropsFromState {
  filteringOptions: FilteringOptions
  filters: FiltersState
}

interface PropsFromDispatch {
  setDuration: typeof setDurationFilter
  setPrice: typeof setPriceFilter
}

type Props = PropsFromState & PropsFromDispatch

class Filters extends Component<Props> {
  public handleChange = () => console.log("Checkbox clicked")
  public handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.setDuration(+e.target.value)
  public handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.props.setPrice(+e.target.value)
  public render() {
    const { airlines, airlineCodes, durationRange, priceRange, stops } = this
      .props.filteringOptions as FilteringOptions
    return (
      <aside className={styles.container}>
        <Card>
          <FilterSection title="Aktarma" canSelectAll={true}>
            {stops.direct > 0 && (
              <CheckBox
                label="Sadece Aktarmasız"
                onChange={this.handleChange}
                checked={true}
              />
            )}
            {stops.singleStop > 0 && (
              <CheckBox label="1 Aktarma" onChange={this.handleChange} />
            )}
            {stops.multipleStops > 0 && (
              <CheckBox label="2+ Aktarma" onChange={this.handleChange} />
            )}
          </FilterSection>
          <FilterSection title="Sınıf" canSelectAll={true}>
            <CheckBox
              label="Ekonomi"
              onChange={this.handleChange}
              checked={true}
            />
            <CheckBox label="Business" onChange={this.handleChange} />
            <CheckBox label="Kurumsal" onChange={this.handleChange} />
          </FilterSection>
          <FilterSection title="Max Fiyat">
            <Slider
              min={priceRange.min}
              max={priceRange.max}
              onChange={this.handlePriceChange}
              currentValue={this.props.filters.maxPrice}
            />
          </FilterSection>
          <FilterSection title="Max Uçuş Süresi">
            <Slider
              min={durationRange.min}
              max={durationRange.max}
              onChange={this.handleDurationChange}
              currentValue={this.props.filters.maxDuration}
            />
          </FilterSection>
          <FilterSection title="Havayolu" canSelectAll={true}>
            {airlineCodes.map(airline => (
              <CheckBox
                key={airline}
                label={airline.toString()}
                onChange={this.handleChange}
                checked={true}
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
  setDuration: (val: number) => dispatch(setDurationFilter(val)),
  setPrice: (val: number) => dispatch(setPriceFilter(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToPtops
)(Filters)
