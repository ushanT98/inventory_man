import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import StockDataService from '../../Util/StockContext';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const StockList = ({ getStockId }) => {

    // States
    const [stocks, setStocks] = useState([]);

    // MUI Modal States
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Edit States
    const [ename, setEName] = useState("");
    const [edescription, setEDescription] = useState("");
    const [equantity, setEQuantity] = useState("");
    const [ecategory, setECategory] = useState("");
    const [ebrand, setEBrand] = useState("");
    const [estatus, setEStatus] = useState("");

    // Storing Id of Edit
    const [currentId, setCurrentId] = useState("");


    // Fetch all stocks
    useEffect(() => {
        getStocks();
        console.log("Getting all books from useEffect");
    }, []);

    const getStocks = async () => {
        const data = await StockDataService.getAllStocks();
        // setlastDoc(data.docs[data.docs.length - 1])
        console.log(data.docs);
        setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };



    // Delete a Stock
    const deleteHandler = async (id) => {
        await StockDataService.deleteStock(id);
        getStocks();
    }



    // Modal Form Styling
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    // Populating Values to the Edit Modal Form
    const handleUpdateClick = async (id) => {
        const docSnap = await StockDataService.getStock(id);
        console.log("the record is here:", docSnap.data());
        setEName(docSnap.data().name);
        setEDescription(docSnap.data().description);
        setEQuantity(docSnap.data().quantity);
        setECategory(docSnap.data().category);
        setEBrand(docSnap.data().brand);
        setEStatus(docSnap.data().status);
    }



    //Handing Edit when the update button is clicked
    const handleUpdate = async () => {

        const newStock = {
            name: ename,
            description: edescription,
            quantity: equantity,
            category: ecategory,
            brand: ebrand,
            status: estatus,
        };

        console.log(currentId);

        console.log("New Book: ", newStock);
        await StockDataService.updateStock(currentId, newStock);

        //Refresh Page
        getStocks();

    }




    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center pb-4'>
                    <div className="container text-center mt-5 dashboard-content">
                        <h1>Track Stock</h1>
                    </div>
                </div>

                {/* ---------- Stock Table START ---------- */}
                <div className="table-responsive table-edit">
                    <Table striped size="sm" className="table table-bordered table-edit">
                        <thead>
                            <tr className="text-center p-2">
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Status</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map((doc, index) => {
                                return (
                                    <tr key={doc.id} className="text-center p-2" >
                                        <td>{index + 1}</td>
                                        <td>{doc.name}</td>
                                        <td>{doc.description}</td>
                                        <td>{doc.quantity}</td>
                                        <td>{doc.category}</td>
                                        <td>{doc.brand}</td>
                                        <td>{doc.status}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                onClick={(e) => deleteHandler(doc.id)}

                                            >
                                                Delete
                                            </Button>
                                            <Button variant="secondary" onClick={(e) => { getStockId(doc.id); handleOpen(); handleUpdateClick(doc.id); setCurrentId(doc.id);}}>Update</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>

                                                    {/* ------------- Form Inside Modal START ------------- */}
                                                    <Container className="table-modal-container">
                                                        <Form className='rounded p-4 p-sm-4 border table-modal-form'>
                                                            <h1 className='font-weight-bold text-center pb-4 update-form-title'>
                                                                UPDATE FORM
                                                            </h1>

                                                            {/* ------------- Update Form START -------------*/}

                                                            <Row>
                                                                <Col>
                                                                    <Form.Group className="mb-4" controlId="formProductName">
                                                                        <Form.Label>Product Name</Form.Label>
                                                                        <InputGroup>
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Product Name"
                                                                                value={ename}
                                                                                onChange={(e) => setEName(e.target.value)}
                                                                            />
                                                                        </InputGroup>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col>
                                                                    <Form.Group className="mb-4" controlId="formProductDesc">
                                                                        <Form.Label>Description</Form.Label>
                                                                        <InputGroup>
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Description"
                                                                                value={edescription}
                                                                                onChange={(e) => setEDescription(e.target.value)}
                                                                            />
                                                                        </InputGroup>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-4" controlId="formProductQuantity">
                                                                        <Form.Label>Quantity</Form.Label>
                                                                        <InputGroup>
                                                                            <Form.Control
                                                                                type="number"
                                                                                placeholder="Quantity"
                                                                                value={equantity}
                                                                                onChange={(e) => setEQuantity(e.target.value)}
                                                                            />
                                                                        </InputGroup>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col>
                                                                    {/* -------------- Category Dropdown START -------------- */}
                                                                    <Form.Group className="mb-3" controlId="formProductCategory">
                                                                        <Form.Label>Category</Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Categories"
                                                                            value={ecategory}
                                                                            onChange={(e) => setECategory(e.target.value)}
                                                                        >
                                                                            <option value=""></option>
                                                                            <option value="Mobile Phones">Mobile Phones</option>
                                                                            <option value="Books">Books</option>
                                                                            <option value="Tools">Tools</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                    {/* -------------- Category Dropdown END -------------- */}
                                                                </Col>
                                                                <Col>
                                                                    <Form.Group className="mb-4" controlId="formProductBrand">
                                                                        <Form.Label>Brand</Form.Label>
                                                                        <InputGroup>
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Brand"
                                                                                value={ebrand}
                                                                                onChange={(e) => setEBrand(e.target.value)}
                                                                            />
                                                                        </InputGroup>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col>
                                                                    {/* -------------- Status Dropdown START -------------- */}
                                                                    <Form.Group className="mb-3" controlId="formProductStatus">
                                                                        <Form.Label>Status</Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Status"
                                                                            value={estatus}
                                                                            onChange={(e) => setEStatus(e.target.value)}
                                                                        >
                                                                            <option value=""></option>
                                                                            <option value="High">High</option>
                                                                            <option value="Medium">Medium</option>
                                                                            <option value="Low">Low</option>
                                                                            <option value="Very Low">Very Low</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                    {/* -------------- Status Dropdown END -------------- */}
                                                                </Col>
                                                            </Row>

                                                            {/* ------------- Update Form END ------------- */}

                                                            <div className="d-grid gap-2">
                                                                <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); handleUpdate()}} >
                                                                    Update
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </Container>
                                                    {/* ------------- Form Inside Modal END ------------- */}
                                                </Box>
                                            </Modal>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </Table>
                </div>
                {/* ---------- Stock Table END ---------- */}

                <div className="container text-center mt-5">
                    <Row>
                        <Col>
                            <Link to="/stockForm">
                                <Button variant="secondary">Navigate to Insert Form</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/dashboard">
                                <Button>Navigate to Dashboard</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/stocktrackmain">
                                <Button>Navigate to Stock Track Main</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>

            </div>
        </div >

    )

};

export default StockList;






// function stockLevel() {

//     // States
//     const [stocks, setStocks] = useState([]);

//     // MUI Modal States
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     // Edit States
//     const [ename, setEName] = useState("");
//     const [edescription, setEDescription] = useState("");
//     const [equantity, setEQuantity] = useState("");
//     const [ecategory, setECategory] = useState("");
//     const [ebrand, setEBrand] = useState("");
//     const [estatus, setEStatus] = useState("");



//     // Fetch all stocks
//     useEffect(() => {
//         getStocks();
//         console.log("Getting all books from useEffect");
//     }, []);

//     const getStocks = async () => {
//         const data = await StockDataService.getAllStocks();
//         // setlastDoc(data.docs[data.docs.length - 1])
//         console.log(data.docs);
//         setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };



//     // Delete a Stock
//     const deleteHandler = async (id) => {
//         await StockDataService.deleteStock(id);
//         getStocks();
//     }



//     // Modal Form Styling
//     const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 900,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         p: 4,
//     };




//     return (

//         <div className='page vertically-center'>
//             <div className="container">
//                 <div className='background-overlay d-flex justify-content-center align-items-center pb-4'>
//                     <div className="container text-center mt-5 dashboard-content">
//                         <h1>Track Stock</h1>
//                     </div>
//                 </div>

//                 {/* ---------- Stock Table START ---------- */}
//                 <div className="table-responsive table-edit">
//                     <Table striped size="sm" className="table table-bordered table-edit">
//                         <thead>
//                             <tr className="text-center p-2">
//                                 <th>#</th>
//                                 <th>Product Name</th>
//                                 <th>Description</th>
//                                 <th>Quantity</th>
//                                 <th>Category</th>
//                                 <th>Brand</th>
//                                 <th>Status</th>
//                                 <th>Edit/Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {stocks.map((doc, index) => {
//                                 return (
//                                     <tr key={doc.id} className="text-center p-2" >
//                                         <td>{index + 1}</td>
//                                         <td>{doc.name}</td>
//                                         <td>{doc.description}</td>
//                                         <td>{doc.quantity}</td>
//                                         <td>{doc.category}</td>
//                                         <td>{doc.brand}</td>
//                                         <td>{doc.status}</td>
//                                         <td>
//                                             <Button
//                                                 variant="danger"
//                                                 onClick={(e) => deleteHandler(doc.id)}

//                                             >
//                                                 Delete
//                                             </Button>
//                                             <Button variant="secondary" onClick={(e) => { handleOpen(); }}>Update</Button>
//                                             <Modal
//                                                 open={open}
//                                                 onClose={handleClose}
//                                                 aria-labelledby="modal-modal-title"
//                                                 aria-describedby="modal-modal-description"
//                                             >
//                                                 <Box sx={style}>

//                                                     {/* ------------- Form Inside Modal START ------------- */}
//                                                     <Container className="table-modal-container">
//                                                         <Form className='rounded p-4 p-sm-4 border table-modal-form'>
//                                                             <h1 className='font-weight-bold text-center pb-4 update-form-title'>
//                                                                 UPDATE FORM
//                                                             </h1>

//                                                             {/* ------------- Update Form START -------------*/}

//                                                             <Row>
//                                                                 <Col>
//                                                                     <Form.Group className="mb-4" controlId="formProductName">
//                                                                         <Form.Label>Product Name</Form.Label>
//                                                                         <InputGroup>
//                                                                             <Form.Control
//                                                                                 type="text"
//                                                                                 placeholder="Product Name"
//                                                                                 value={ename}
//                                                                                 onChange={(e) => setEName(e.target.value)}
//                                                                             />
//                                                                         </InputGroup>
//                                                                     </Form.Group>
//                                                                 </Col>
//                                                             </Row>

//                                                             <Row>
//                                                                 <Col>
//                                                                     <Form.Group className="mb-4" controlId="formProductDesc">
//                                                                         <Form.Label>Description</Form.Label>
//                                                                         <InputGroup>
//                                                                             <Form.Control
//                                                                                 type="text"
//                                                                                 placeholder="Description"
//                                                                                 value={edescription}
//                                                                                 onChange={(e) => setEDescription(e.target.value)}
//                                                                             />
//                                                                         </InputGroup>
//                                                                     </Form.Group>
//                                                                 </Col>
//                                                                 <Col>
//                                                                     <Form.Group className="mb-4" controlId="formProductQuantity">
//                                                                         <Form.Label>Quantity</Form.Label>
//                                                                         <InputGroup>
//                                                                             <Form.Control
//                                                                                 type="number"
//                                                                                 placeholder="Quantity"
//                                                                                 value={equantity}
//                                                                                 onChange={(e) => setEQuantity(e.target.value)}
//                                                                             />
//                                                                         </InputGroup>
//                                                                     </Form.Group>
//                                                                 </Col>
//                                                             </Row>

//                                                             <Row>
//                                                                 <Col>
//                                                                     {/* -------------- Category Dropdown START -------------- */}
//                                                                     <Form.Group className="mb-3" controlId="formProductCategory">
//                                                                         <Form.Label>Category</Form.Label>
//                                                                         <Form.Select
//                                                                             aria-label="Categories"
//                                                                             value={ecategory}
//                                                                             onChange={(e) => setECategory(e.target.value)}
//                                                                         >
//                                                                             <option value=""></option>
//                                                                             <option value="Mobile Phones">Mobile Phones</option>
//                                                                             <option value="Books">Books</option>
//                                                                             <option value="Tools">Tools</option>
//                                                                         </Form.Select>
//                                                                     </Form.Group>
//                                                                     {/* -------------- Category Dropdown END -------------- */}
//                                                                 </Col>
//                                                                 <Col>
//                                                                     <Form.Group className="mb-4" controlId="formProductBrand">
//                                                                         <Form.Label>Brand</Form.Label>
//                                                                         <InputGroup>
//                                                                             <Form.Control
//                                                                                 type="text"
//                                                                                 placeholder="Brand"
//                                                                                 value={ebrand}
//                                                                                 onChange={(e) => setEBrand(e.target.value)}
//                                                                             />
//                                                                         </InputGroup>
//                                                                     </Form.Group>
//                                                                 </Col>
//                                                                 <Col>
//                                                                     {/* -------------- Status Dropdown START -------------- */}
//                                                                     <Form.Group className="mb-3" controlId="formProductStatus">
//                                                                         <Form.Label>Status</Form.Label>
//                                                                         <Form.Select
//                                                                             aria-label="Status"
//                                                                             value={estatus}
//                                                                             onChange={(e) => setEStatus(e.target.value)}
//                                                                         >
//                                                                             <option value=""></option>
//                                                                             <option value="High">High</option>
//                                                                             <option value="Medium">Medium</option>
//                                                                             <option value="Low">Low</option>
//                                                                             <option value="Very Low">Very Low</option>
//                                                                         </Form.Select>
//                                                                     </Form.Group>
//                                                                     {/* -------------- Status Dropdown END -------------- */}
//                                                                 </Col>
//                                                             </Row>

//                                                             {/* ------------- Update Form END ------------- */}

//                                                             <div className="d-grid gap-2">
//                                                                 <Button className="insert-btn" variant="primary" type="button" onClick={(e) => { handleClose(); }} >
//                                                                     Update
//                                                                 </Button>
//                                                             </div>
//                                                         </Form>
//                                                     </Container>
//                                                     {/* ------------- Form Inside Modal END ------------- */}
//                                                 </Box>
//                                             </Modal>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}

//                         </tbody>
//                     </Table>
//                 </div>
//                 {/* ---------- Stock Table END ---------- */}

//                 <div className="container text-center mt-5">
//                     <Row>
//                         <Col>
//                             <Link to="/stockForm">
//                                 <Button variant="secondary">Navigate to Insert Form</Button>
//                             </Link>
//                         </Col>
//                         <Col>
//                             <Link to="/dashboard">
//                                 <Button>Navigate to Dashboard</Button>
//                             </Link>
//                         </Col>
//                     </Row>
//                 </div>

//             </div>
//         </div >

//     )

// }


// export default stockLevel