

import Layout from "../../components/layout/Layout";
import { useState,useEffect} from "react";
import banner from "../../assets/shopping-bag-cart (1).jpg"
import SingleProductCard from "../../components/productCard/SingleProductCard";
import myContext from "../../context/data/myContext";
import { useContext } from "react";











const AllProducts = ()=>{
    
    const context = useContext(myContext)
   const {allCategories,allProducts} = context;
    
    
    const [category,setCategory] = useState("All Products");
    

    
    


    
   
    

    


    





    


    return (
       <>
        <Layout>
        <div className="relative">
                    <img src={banner} className="object-cover object-center w-full h-[200px] mt-5" alt="banner"/>
                    <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
                        <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl ">All Products</h2>
                </div>
            

                
    
        <div className="flex justify-center">
            <h3 className="font-bold m-4">Filter By Category :</h3>
            <select className="h-[30px] w-[180px] flex justify-center m-4 font-semibold border-2 border-black rounded-sm" value={category} onChange={(e)=>setCategory(e.currentTarget.value)}>
                <option className="px-6">All Products</option>
                {
            allCategories.map((eachCategory,index)=>(
                <option id={index} className="" key={index}>
                          {eachCategory}
                </option>
            )
            )
                }
            </select>
            </div>

            

  {
    <section className="text-gray-600 body-font w-full">
        <div className="container px-4 py-24">
            <div className="flex flex-wrap justify-center gap-8">
                {
                  category === "All Products" ? (
                
                    allProducts.map(item =>(
                  
                        <div key={item.id} className="w-full max-w-sm bg-white border-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:w-1/4 md:w-1/2">
                            <SingleProductCard item={item}/>
                        </div>
                        

                    ))

                  ):(
                    
                    allProducts.filter((item)=>item.category === category).map(item =>(
                        
                        <div key={item.id} className="w-full max-w-sm bg-white border-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:w-1/4 md:w-1/2">
                               <SingleProductCard item={item}/>
                        </div>

                    ))

                    










                  )


                    
                }

            </div>
        </div>

    </section>
  }



        
    


        </Layout>
        </>
    )
}

export default AllProducts;