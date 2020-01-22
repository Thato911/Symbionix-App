import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'; 

import { connect } from 'react-redux';
import { addCar } from '../actions/carActions';

class CarModal extends Component {
    state = {
        modal: false,
        model: '',
        make: '',
        mileage: '',
        year: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newCar = {
            model: this.state.model,
            make: this.state.make,
            mileage: this.state.mileage,
            year: this.state.year
        }

        // Add item via addCar action
        this.props.addCar(newCar);

        // Close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Car</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Car List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="model">Model</Label>
                                <Input 
                                    type="text"
                                    name="model"
                                    id="model" 
                                    placeholder="Enter Car Model"
                                    onChange={this.onChange}
                                />
                                <Label for="make">Make</Label>
                                <Input 
                                    type="text"
                                    name="make"
                                    id="make" 
                                    placeholder="Enter Car Make"
                                    onChange={this.onChange}
                                />
                                <Label for="mileage">Mileage</Label>
                                <Input 
                                    type="text"
                                    name="mileage"
                                    id="mileage" 
                                    placeholder="Enter Car Mileage"
                                    onChange={this.onChange}
                                />
                                <Label for="year">Year</Label>
                                <Input 
                                    type="text"
                                    name="year"
                                    id="year" 
                                    placeholder="Enter Car Year"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block 
                                >Add Car</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    car: state.car
});

export default connect(mapStateToProps, { addCar })(CarModal);

