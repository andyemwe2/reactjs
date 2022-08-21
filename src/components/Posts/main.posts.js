//children component
import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.posts"

const Main = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <Collection />
      </Container>
    </React.Fragment>
  )
}

export default Main
