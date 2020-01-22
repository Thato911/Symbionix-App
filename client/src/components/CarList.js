import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Container, Table  } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCars, deleteCar } from '../actions/carActions';
import PropTypes from 'prop-types';

class CarList extends Component {
    componentDidMount() {
        this.props.getCars();
    }

    onDeleteClick = (id) => {
        this.props.deleteCar(id);
    }

    render() {
        const { cars } = this.props.car;
        return(
            <Container>
                <TransitionGroup className="car-list">
                    <Table >
                        <thead> 
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Mileage</th>
                                <th>Year</th>
                                <th></th>
                            </tr>
                        </thead>
                        {cars.map(({_id, model, make, mileage, year}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade ">
                                <tbody >
                                    <tr>
                                        <td>{model} </td>
                                        <td>{make}</td>
                                        <td>{mileage}</td>
                                        <td>{year}</td>
                                        <td>
                                            <Button
                                                className="remove-btn"
                                                color="danger"
                                                size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >Delete</Button>
                                        </td>
                                    </tr> 
                                </tbody>
                            </CSSTransition>
                        ))}
                     </Table>
                </TransitionGroup>
            </Container>
        )
    }
}

CarList.propTypes = {
    getCars: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    car: state.car
});

export default connect(
    mapStateToProps, 
    { getCars, deleteCar }
)(CarList);