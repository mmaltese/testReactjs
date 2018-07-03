import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail component componentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail component componentDidUpdate is invoked');
    }
    
    renderComments(comments) {
        if (comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map((comment) => (
                                <li key={comment.id}>
                                    <div>{comment.comment}</div>
                                    <blockquote>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}}</blockquote>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>       
            );
    }

    render() {
        console.log('DishDetail component render invoked');
        if (this.props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;
