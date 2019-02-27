import React from "react"
import cx from "classnames"

import styles from "./SearchBar.module.scss"
import { Container, SearchForm } from "../"

interface Props {
  type: "primary" | "secondary"
}

const SearchBar: React.SFC<Props> = props => {
  const classNames = cx(styles.container, styles[props.type])
  return (
    <section className={classNames}>
      <Container className={styles.searchBar}>
        {props.type === "secondary" && (
          <h2 className={styles.title}>En uygun bileti hemen bul</h2>
        )}
        <SearchForm type={props.type} />
      </Container>
    </section>
  )
}

SearchBar.defaultProps = {
  type: "primary"
}

export default SearchBar
