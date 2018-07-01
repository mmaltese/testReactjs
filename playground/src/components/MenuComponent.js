import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }

        console.log('menu component contructor is invoked');
    }

    componentDidMount() {
        console.log('menu component componentDidMount is invoked');
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                            <p>{dish.description}</p>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }); 


        console.log('menu component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }

}

export default Menu;