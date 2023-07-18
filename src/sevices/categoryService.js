import axios from "axios";

export default class CategoryService{
getCategory(){
    return axios.get("http://localhost:8080/api/category/getall")
}
}