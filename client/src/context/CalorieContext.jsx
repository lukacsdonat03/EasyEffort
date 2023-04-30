import axios from "axios";
import { createContext, useState } from "react";

export const CalorieContext = createContext()

export const CalorieOperations = ({children}) =>{

    const [productList,setProductList] = useState([])

    const listItem =  async () =>{
        axios.get(`http://localhost:8080/api/v1/products/`,{withCredentials:true})
            .then(res=>{
                setProductList(res.data)
            })
            .catch(err=>{console.error(err);alert('Something went wrong, Please try again!')})
    }

    const createItem = (item,input) =>{
        axios.post(
            "http://localhost:8080/api/v1/products/",
            {
              name: item.item_name,
              amount: item.nf_serving_size_qty * input,
              carbohydrate: item.nf_total_carbohydrate,
              protein: item.nf_protein,
              fat: item.nf_total_fat,
              totalCalorie: item.nf_calories,
            },
            { withCredentials: true }
          );
          listItem()
    }

    const deleteItem = (id) =>{
       axios.delete(`http://localhost:8080/api/v1/products/${id}`,{withCredentials:true})
        .then((res)=>{
            if(res.status === 204) alert('Item removed successfully!')
        })
        .catch((err)=>{
            console.error(err)
            alert('Something went wrong')
        })
        listItem()
    }


    return (
        <CalorieContext.Provider value={{productList,listItem,createItem,deleteItem}}>
            {children}
        </CalorieContext.Provider>
    )
}

