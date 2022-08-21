import { Spinner } from 'react-bootstrap'

const Loaders = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style = {{minHeight: "100vh"}}>
            <div className='d-flex'>
                <Spinner animation="border" />;
            </div>
        </div>
    )
}

export default Loaders