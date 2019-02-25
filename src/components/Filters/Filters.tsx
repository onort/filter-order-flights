import React, { Component } from "react"

import styles from "./Filters.module.scss"
import { Card, FilterSection } from "../"

class Filters extends Component {
  public render() {
    return (
      <Card className={styles.container}>
        <FilterSection title="Aktarma" canSelectAll={true}>
          <span>Filter Section</span>
        </FilterSection>
        <FilterSection title="Sınıf" canSelectAll={true}>
          <span>Filter Section</span>
        </FilterSection>
        <FilterSection title="Max Fiyat">
          <span>Filter Section</span>
        </FilterSection>
        <FilterSection title="Max Uçuş Süresi">
          <span>Filter Section</span>
        </FilterSection>
        <FilterSection title="Havayolu" canSelectAll={true}>
          <span>Filter Section</span>
        </FilterSection>
      </Card>
    )
  }
}

export default Filters
