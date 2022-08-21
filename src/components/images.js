import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import axios from "axios"

const Images = (props) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos`
    }).then((res) => console.log(res))
  }, [])

  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Container>
    </React.Fragment>
  )
}

export default Images
