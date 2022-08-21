import React, { useEffect, useState } from "react"
import axios from "axios"
import { ButtonGroup, Button, Card  } from "react-bootstrap"
import Loaders from "../Utlis/Loaders"
import Modals from "./modals.posts"

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  useEffect(() => {
    let isCancel = false
    if (!isCancel) {
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
      }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }

    //clean up render
    return () => { isCancel = true }
  }, [limit])

  const handleLimit = (props) => {
    (props === "+") ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }

  const showModal = (data) => {
    setDataModal(data)
    setShow(true)
  }

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      <h3>{limit} Posts</h3>
      {datas.map((data, i) => {
        return (
          <Card key={i}>
            <Card.Header>Post {i+1}</Card.Header>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Button variant="primary" onClick={() => showModal(data)}>Show More</Button>
            </Card.Body>
          </Card>
        )
        })}
        <ButtonGroup className="d-flex justify-content-center align-items-center-2">
          <button className="btn btn-outline-primary" onClick={() => handleLimit("+")}>+</button>
          <button className="btn btn-outline-primary" style={ (limit <= 1) ? { display:'none'} : {display : 'block'} } onClick={() => handleLimit("-")} >-</button>
        </ButtonGroup>
        <Modals isShow={show} dataModal={dataModal} isClose={() => setShow(false)} />
    </React.Fragment>
  )
}

export default Collection
