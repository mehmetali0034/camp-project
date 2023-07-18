import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../sevices/productService'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';

export default function ProductList() {
    const [products, setProducts] = useState([]) //Benim products diye bir datam var ve default değeri boş bir array.Bu product'ı değiştirmek içinde yanındaki fonksiyonu setproducts'ı kullanıyorum
    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])//[] içi boş oldupu için bvuun sadece bir kere render eder. Eğer onun içierine bir şey koyarsam o her değişikliğe uğradığında render eder.
    //Mesela içerine state koysak ürünler en başta bir kere listelenir.Sonrasında state her değiştiğinde birdaha render edilir.   
    const dispatch =useDispatch()//useDispatch hook'u, eylemleri tetiklemek için bir fonksiyon döndürür.Yani benim storeumun içerisinden bana fonksiyon(action fonksiyonlarımı) döndürüyor böylece bu fonksiyonlarla eylemleri tetikleyebiiyorum.
    const handleAddCart = (product) =>{
        dispatch(addToCart(product))
        toast.success(`${product.productName} Sepete Eklendi !`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        products.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.category.categoryName}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={()=>handleAddCart(product)}>Sepete Ekle</Button>
                                    <ToastContainer position='bottom-right' />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
