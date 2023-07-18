import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../sevices/productService'
export default function ProductDetail() {
    let {name} = useParams()//Bu şekilde,useParams hook'u kullanılarak "/products/:id" yolundaki dinamik ":id" parametresine erişim sağlanmıştır.
    //Burada id demem :id olduğunu algılıyor Yani id'den başka bir değer verirsem algılamaz.:id şeklinde kullandığımda id bir parametre 
    //oluyor.UseParams ise bu parametreyi bana obje olarak veiryor.
    /*İşlemlerimizi sıralayalım;İlk olarak Link to ile dedimki ben ürne tıkladığımda ürünün aydisi benim yolumda products/'tan sona gelen
  olsun.Ardın ben mesela 1. ye tıkladığımda id=1 oldu url'e products/1 yazdı.Sonrasında useParams gitti buradaki dinamik olan id değerini
  aldı nesne olarak bana döndürdü.Böylece artık o id değerine ulaşabildim.Sonrada id değerini serviste getbyProductId ' de parametre olarak verdim
  Böylece id'sini girdiğim kullanıcıyı bana getirdi.(Sonradan id'yi name olarak değiştim.)
  */
  const [product, setProduct] = useState({}) //Başlangıç değreini {} verdim çünkü swaggerdan bakarsak görücez bize bu şekilde getiriyor.
  
  useEffect(()=>{
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data))//Burada içeriye parametre olarak koyduğum name bana useParams'tan gelen name'dir.
    },[])
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content >
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>Ürün Bilgileri</Card.Meta>
                        <Card.Description>
                            Ürün Fiyatı: <strong>{product.unitPrice} TL</strong> <br></br>
                            Birim Başına Miktar: <strong>{product.quantityPerUnit}</strong> 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                            </Button>
                            <Button basic color='red'>
                                Favoriye Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
