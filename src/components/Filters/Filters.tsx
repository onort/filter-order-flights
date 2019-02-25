/* tslint:disable no-console */
import React, { Component } from "react"

import styles from "./Filters.module.scss"
import { Card, CheckBox, FilterSection, Slider } from "../"

class Filters extends Component {
  public handleChange = () => console.log("Checkbox clicked")
  public render() {
    return (
      <Card className={styles.container}>
        <FilterSection title="Aktarma" canSelectAll={true}>
          <CheckBox
            label="Sadece Aktarmasız"
            onChange={this.handleChange}
            checked={true}
          />
          <CheckBox label="1 Aktarma" onChange={this.handleChange} />
          <CheckBox label="2+ Aktarmasız" onChange={this.handleChange} />
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
            min={0}
            max={100}
            onChange={this.handleChange}
            currentValue={50}
          />
        </FilterSection>
        <FilterSection title="Max Uçuş Süresi">
          <Slider
            min={0}
            max={100}
            onChange={this.handleChange}
            currentValue={50}
          />
        </FilterSection>
        <FilterSection title="Havayolu" canSelectAll={true}>
          <CheckBox
            label="Turkish Airlines"
            onChange={this.handleChange}
            checked={true}
          />
          <CheckBox label="Pegasus" onChange={this.handleChange} />
          <CheckBox label="Borajet" onChange={this.handleChange} />
        </FilterSection>
      </Card>
    )
  }
}

export default Filters
