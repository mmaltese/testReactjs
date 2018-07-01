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
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        </div>
                    </div>
                </div>                
            );
        } else {
            return(<div></div>);
        }
    }

    render() {
        if (this.props.dish === null) {
            <div></div>
        }

        return (
            this.renderDish(this.props.dish)
        );

        console.log('DishDetail component render is invoked');

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
