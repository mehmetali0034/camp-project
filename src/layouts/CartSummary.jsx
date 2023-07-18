import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
export default function CartSummary({}) {
  const {cartItems} = useSelector(state=>state.cart)// React uygulamalarında Redux store'daki verilere erişmek için kullanılan bir hook'tur.
  const getTotalProduct = (cartItems) =>{//Değişken oluştutup değişkene bir fonksiyon atadık.
    let toplam = 0 ;
    cartItems.forEach(item => {
      toplam += item.quantity;
    });
    return toplam;
  }
  const TotalProduct = getTotalProduct(cartItems)
  return (
    <div>
        <Dropdown item text='Sepetim'icon="cart" >
          <Dropdown.Menu>
            <Dropdown.Item>
              <strong>Toplam Ürün</strong> 
           ( {TotalProduct} )
            </Dropdown.Item>
            {cartItems.map(cartItem=>(
              <Dropdown.Item key={cartItem.product.id} > 
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider/> 
            <Dropdown.Item as={NavLink} to="/cart" text="Sepete Git "  icon="cart" >
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      
    </div>
  )
}
