import { Formik, Form, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Button, Dropdown, DropdownItem, DropdownMenu, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/KodlamaIoTextInput';
import CategoryService from '../sevices/categoryService';
import axios from 'axios';

export default function () {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        let categorService = new CategoryService();
        categorService.getCategory().then(result => setcategories(result.data.data))
    }, [])


    const initialValues = { productName: "", unitPrice: 0, unitsInStock: 0, quantityPerUnit: "", category: { id: 1 } }//Burası formun ilk değerleri Formik bizden initialValues altında bunu ister.

    const schema = Yup.object({
        productName: Yup.string().required('İsim alanı zorunludur'),
        unitPrice: Yup.number().typeError('Lütfen geçerli bir değer giriniz.').required('Ürün fiyatı zorunludur'),
        unitsInStock: Yup.number().typeError('Lütfen geçerli bir değer giriniz.').required('Bu alan boş bırakılamaz.'),
        quantityPerUnit: Yup.string(),
        category: Yup.object().shape({
            id: Yup.number().required('Category ID is required'),
        })

        /*Formik içieriindeki butonda type olarak submit varsa kendi içerisindeki onSubmit ile otomatik olarak bunu bağlar.Yani butona bastığımda
        //ikisni bağlamış olurum.onSubmit bir obje alır içierisinde de bir fonksiyon olur bu fonksiyonun içindeki values bizim field içerisinde 
        yazdığımız değerlerdir. */
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    axios.post('http://localhost:8080/api/products/add', values)
                        .then(response => {
                            console.log("Veri eklendi")
                        })
                    // console.log(values)
                }}
            >
                <Form className='ui form' >
                    {                     
                     <Dropdown name="category.id"
                         placeholder='Kategoriler'
                         fluid
                         selection
                    options={
                             categories.map(category => (
                                <DropdownItem options key={category.id} >{category.id}-{category.categoryName}</DropdownItem>

                            ))
                         }
                    /> }
                    {/* <FormField name="category.id">
                  
                    <Dropdown
                    placeholder='Kategori'
                         fluid
                         selection
                         
                         options={
                             categories.map(category =>(
                                 <DropdownItem  key={category.id} >{category.id}
                                 </DropdownItem>
                             ))
                         }
                     />

                  
                      <ErrorMessage name="categoryId" render={error =>
                            <Label pointing basic color='red' content={error} ></Label>
                            
                      }>
                       </ErrorMessage>
                        
                  </FormField> */}
                    
                      
                    

                    <label>Ürün Adı:</label>
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
                    <label>Ürün Fiyatı:</label>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <label>Stok:</label>
                    <KodlamaIoTextInput name="unitsInStock" placeholder="Stok" />
                    <label>Birim Başına Miktar</label>
                    <KodlamaIoTextInput name="quantityPerUnit" placeholder="Bu alan zorunlu değildir."/>
                    <label>İlgili Kategori Numarasını Giriniz:</label>
                     <KodlamaIoTextInput name="category.id"  />

                    <Button color='green' type='submit' >Ekle</Button>
                    {/* <Dropdown placeholder='Kategoriler' fluid selection  >
                    <DropdownMenu>
                       {
                        categories.map(category=>(
                            <DropdownItem>{category.categoryName}</DropdownItem>
                        ))
                       }

                    </DropdownMenu>

                   </Dropdown> */}


                    {/* <FormField>
                        <label>Ürün Adı:</label>
                        <Field name="productName" placeholder="Ürün Adı" ></Field>
                        <ErrorMessage name="productName" render={error =>
                            <Label pointing basic color='red' content={error} ></Label>
                        } >

                        </ErrorMessage>
                    </FormField> */}


                </Form>
            </Formik>
        </div>
    )
}
