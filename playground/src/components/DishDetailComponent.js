import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
    
    renderComments(comments) {
        if (this.props.dish === null) {
            return (<div></div>)
        }
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                <div>{comment.comment}</div>
                                <blockquote>--{comment.author}, {comment.date}</blockquote>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    renderDish(dish) {
        if(dish != null) {
            var renderedComments = this.renderComments(dish.comments);
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
                            {renderedComments}
                        </div>
                    </div>
                </div>                
            );
        } else {
            return(<div></div>);
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }
}

export default DishDetail;
