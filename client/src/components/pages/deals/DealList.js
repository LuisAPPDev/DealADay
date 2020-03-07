import React, { Component } from 'react'
import DealServices from '../../../services/deal.services'
import DealCard from './DealCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import CategorySearch from '../../ui/CategorySearch'
import Spinner from 'react-bootstrap/Spinner'

class DealsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deals: [],
            
        }
        this.services = new DealServices()
    }

    componentDidMount = () => this.getAllDeals()

    getAllDeals = () => {
        this.services.getAllDeals()
            .then(allDeals => this.setState({ deals: allDeals }))
            .catch(err => console.log(err))
    }

    
    getFilterDeals = (input) => {
        this.services.getFilterDeals(input)
            .then(FilterDeals => this.setState({ deals: FilterDeals }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container style={{ textAlign: 'center' }}>


                <CategorySearch dealFilter={this.getFilterDeals}/>
                {this.state.deals.length ? (
                    <Row style={{ justifyContent: 'center' }}>
                        {this.state.deals.map(elm => <DealCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <Spinner animation="border" variant="warning" />

                }

            </Container>
        )
    }
}

export default DealsList