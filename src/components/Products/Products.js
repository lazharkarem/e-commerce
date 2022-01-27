import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product'
const products =[
    {id:1, name:'Shoes', description:'Running shoes.', price:'$5', image:'https://www.pngall.com/wp-content/uploads/2016/04/Running-Shoes-Free-Download-PNG.png'},
    {id:2, name:'MacBook', description:'Apple macbook.',price:'$10',image:'https://images.frandroid.com/wp-content/uploads/2020/11/apple-macbook-pro-13-2020-m1-frandroid.png'},
];


const Products =()=>{
    return (
    <main>
        <Grid container justify="center" spacing={4} >
            {products.map((product)=>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />

            </Grid>
            ))}

        </Grid>
    </main>
    );
}

export default Products;