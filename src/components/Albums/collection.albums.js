import React, { useEffect, useState } from "react"
import axios from "axios"
import Carousel from "react-bootstrap/Carousel"
import { ButtonGroup } from "react-bootstrap"
import Loaders from "../Utlis/Loaders"

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancel = false
    if (!isCancel) {
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
      }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }

    //clean up render
    return () => { isCancel = true }
  }, [limit])

  const handleLimit = (props) => {
    (props === "+") ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <h3>{limit} Collection</h3>
      <Carousel>
        {/* carousel items start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data.url} alt="First slide" height={450} width={450} />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* carousel items end */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center-2">
        <button className="btn btn-outline-primary" onClick={() => handleLimit("+")}>+</button>
        <button className="btn btn-outline-primary" style={ (limit <= 1) ? { display:'none'} : {display : 'block'} } onClick={() => handleLimit("-")} >-</button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection
