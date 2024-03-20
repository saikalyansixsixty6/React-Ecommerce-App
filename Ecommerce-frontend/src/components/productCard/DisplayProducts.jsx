
import SingleProductCard from "./SingleProductCard";
import myContext from "../../context/data/myContext";
import { useContext } from "react";



const DisplayProducts = () => {

  const context = useContext(myContext);
  const {searchkey,filterType,allProducts} = context;






  










  return (
    <>
    
  <section >
      <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
          
    
              <div className="flex flex-wrap m-4 justify-around ">
      {
        searchkey === "" && filterType === "All Products" ? (
          allProducts.map(item=>
           (
      
         <div key={item.id} className="w-full m-4 max-w-sm bg-white border-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:w-1/4 md:w-1/2">
            <SingleProductCard item={item}/>
         </div>
    
         ))
        ):(
          allProducts
        .filter(item=>item.title.toLowerCase().includes(searchkey))
        .filter(item=>item.category.includes(filterType))
        .map(item=>
           (
      
         <div key={item.id} className="w-full m-4 max-w-sm bg-white border-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:w-1/4 md:w-1/2">
            <SingleProductCard item={item}/>
         </div>
    
         ))
        )
        
        
      }
      </div>  

      </div>
  </section>
    </>
  )
}

export default DisplayProducts
