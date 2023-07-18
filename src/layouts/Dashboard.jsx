import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import productAdd from '../pages/productAdd'


export default function Dashboard() {
    return (
        <div>
            <Grid divided>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route path='/' Component={ProductList} />
                            <Route path='/products' Component={ProductList}/>
                            <Route path="/products/:name" Component={ProductDetail} />
                            <Route path='/cart' Component={CartDetail} />
                            <Route path='/products/add'Component={productAdd} />
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
