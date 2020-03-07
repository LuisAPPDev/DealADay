 
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AuthServices from '../../services/auth.services'
import { Link } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.services = new AuthServices()
    }

    logout = () => {
        this.services.logout()
            .then(response => {
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }


    render() {




        return (

             
                    <Navbar fixed="bottom" className="footerPos" bg="warning" variant="dark">
                        <Nav.Link as="div"> <Link to="/"><p>&copy; Deal a Day 2020 All Rights Reserved</p></Link></Nav.Link>
                        
                        
                            
                        
                    </Navbar>
                )
                       
    }
}

export default Footer