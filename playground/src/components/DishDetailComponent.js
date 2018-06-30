import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        console.log('DishDetail component contructor is invoked');
    }

    componentDidMount() {
        console.log('DishDetail component componentDidMount is invoked');
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const DishDetail = <div></div>;
        var dishDetailReturned = <div></div>;
        if (this.props.dish != null) {
            dishDetailReturned = 
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5 m-1">
                        <Card></Card>
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        {}
                    </div>
                </div>
            </div>
        }

        return (
            dishDetailReturned
        );


        console.log('menu component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    { DishDetail }
                </div>
            </div>
        );
    }

}

export default DishDetail;