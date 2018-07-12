import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    
    function RenderComments({comments}) {
        if (comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map((comment) => (
                                <li key={comment.id}>
                                    <div>{comment.comment}</div>
                                    <blockquote>
                                        --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}}
                                    </blockquote>
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

    function RenderDish({dish}) {
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

    const DishDetail = (props) => {
        console.log('DishDetail component render invoked');
        if (props.dish != null)
            return (
              <div className="container">
                <div className="row">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                      Menu
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <RenderDish dish={props.dish}/>
                  <RenderComments comments={props.comments} />
                </div>
              </div>
            );
        else
            return (
                <div></div>
            );
    }

export default DishDetail;
