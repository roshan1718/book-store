import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CustomerDetailsForm from './CustomerDetailsForm';

function Cart({ basketProps }) {
    console.log(basketProps);
    //const { showHide } = this.state;
    let booksInCart = [];
    let showHide;

    Object.keys(basketProps.books).forEach(function (item) {
        console.log(item);
        console.log(basketProps.books[item].inCart);
        if (basketProps.books[item].inCart) {
            booksInCart.push(basketProps.books[item])
        }
        console.log(booksInCart);
    })

    booksInCart = booksInCart.map((books) => {
        return (
            <Fragment>
                <div className="flex-container-column">
                    <div style={{ border: '1px solid red', marginLeft: '130px', marginRight: '130px' }}>
                        <div>
                            <h4 className="heading_style"> My cart</h4>
                        </div>

                        <div className="flex-container-row">
                            <div><img src={books.url} alt="" className="image_style" /></div>
                            <div>
                                <h4 className="heading-style-first">{books.name}</h4>
                                <h6 className="heading-style-second">{books.author}</h6>
                                <h4 className="heading-style-third">{books.price}</h4>
                            </div>
                        </div>

                 {/*       <div className="flex-container-row">
                            <div className="counter">
                                <button className="btn-style-count" type="button" onClick={this.DecrementCount}>-</button>
                                <button className="btn-style-count1">{this.state.count}</button>
                                <button type="button" onClick={this.incrementCount}>+</button>
        </div> */}
                            <div>
                                <button className="btn-style-remove">Remove</button>
                            </div>
                        </div>

                        <div>
                            <button className="btn-style-placeorder" onClick={() => this.hideComponent("showHide")}>PLACE ORDER</button>
                        </div>
                    </div>

                    {showHide && <CustomerDetailsForm />}
                    <hr />

                    <div style={{ border: '1px solid red', height: '40px', marginLeft: '130px', marginRight: '130px' }}>
                        <button className="btn-style-custom">Customer Details</button>
                    </div>

                    <div style={{ border: '1px solid red', height: '40px', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
                        <button className="btn-style-summary" >Order Summary</button>
                    </div>
                
            </Fragment>
        )
    })

    return (
        <div>
            {booksInCart}
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart)