import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaIoTextInput({...props}) {//Böylece bunun içersiinde yazdıklarım gelicek ve ayrı ayrı obje olarak tutulucak.
  //console.log(props)
  const [field,meta]=useField(props) //Usefild propsrtan gelen bilgilere bakıyor nameine göre bunla ilgili gerekli bilgileri bizim için yakalıyor
 // console.log(field) fielde bize name value gibi bilgiler verir
  //console.log(meta)// meta bize error durumuyla ilgili bilgiler verir.
  //meta.error normalde stringtir !! koyarak bunu booleana çevirmiş oluruz yani error varsa true durumu olsun demiş oluruz.
 //Formfield içerisine yazdığım kutununda bu durumda kırmızı olmasını ağlar Aşağıyla bağlantısı yoktur.
  return (
    <FormField error={meta.touched && !!meta.error} >
        <input {...field} {...props}  ></input>
        {meta.touched && !!meta.error ?(
             <Label pointing basic color='red' content={meta.error} ></Label>
        ):null}
    </FormField>
  )
}
