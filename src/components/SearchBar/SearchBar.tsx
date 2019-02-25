import React, { Component } from "react"
import cx from "classnames"

import styles from "./SearchBar.module.scss"
import {
  Arrival,
  ArrivalDate,
  Departure,
  DepartureDate,
  Person
} from "../../assets/icons"
import { Button, FormField } from "../"

interface Props {
  className?: string
}

class SearchBar extends Component<Props> {
  public render() {
    const classNames = cx(styles.container, this.props.className)
    return (
      <div className={classNames}>
        <FormField icon={Departure} size="normal" />
        <FormField icon={Arrival} size="normal" />
        <FormField icon={DepartureDate} size="normal" />
        <FormField icon={ArrivalDate} size="normal" />
        <FormField icon={Person} size="small" />
        <Button
          text="Yeniden Ara"
          primary={true}
          className={styles.searchButton}
        />
      </div>
    )
  }
}

export default SearchBar
