import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Bidge from '../components/Bidge'
import Footer from '../components/Footer'
export default function Shop() {
    return(
        <div>
            <Header />
            <Navbar />
            <Bidge />
            <div className="container mx-auto mt-4">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-full md:w-1/4 ">
                        <div className="border px-3">
                            <div  className="font-bold my-2">CATEGORIES</div>
                            {
                                [...Array(3)].map((value,index)=> <div className="flex justify-between">
                                <div className="text-blue-700">Men</div>
                                <div>(2,200)</div>
                            </div>)
                            }
                        </div>
                        <div className="border mt-5 px-3">
                            <div className="font-bold mt-2">FILTER BY PRICE</div> 
                            <div> $75-$300 </div>
                            <div className="font-bold mt-2">SIZE</div> 
                            {
                                ["small(2,379)","Medium(1,282)","Large(1,292)"].map((value,index)=>{
                                    return <div key={index}><input class="mr-2 leading-tight" type="checkbox"/>
                                    <span class="text-sm">
                                        {value}
                                    </span></div>
                                } )
                            }
                            <div className="font-bold mt-2">COLOR</div> 
                            {
                                ["Red(2,479","Green(2,289)","Blue(1075)","purple(1075)"].map((value,index)=> <div>
                                    <input className="mr-2 leading-tight" type="radio" key={index}/>
                                        <span className="text-sm">
                                           {value}
                                        </span>
                                </div>)
                            }
                            
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-3/4 px-5" >
                        <div className="flex justify-between ">
                            <div>Shop All   </div>
                            <div>
                                <button class="bg-gray-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                                    LATEST
                                </button>
                                <button class="bg-gray-500 hover:bg-blue-700 text-black font-bold py-2 px-4 mx-2 rounded">
                                    REFERENCE
                                </button>
                            </div>
                        </div>  
               
                    <div className="flex flex-wrap mt-12 pb-8">
                        {
                            [...Array(11)].map((value,index)=> {
                                return  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 -px-2 -py-3"> 
                                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                                    <img className="w-full " src="https://diyprinting.com.ph/wp-content/uploads/2016/10/Polycotton-Royal-blue.jpg" alt="Sunset in the mountains"/>
                                    <div className=" py-4">
                                        <div className="text-sm text-purple-700 text-center">Tank Top</div>
                                        <div className="text-center">Finding perfect t-shirt</div>
                                        <div className="text-sm text-purple-700 text-center">$50</div>
                                    </div>  
                                </div>
                            </div>
                            })
                        }
                    </div>
                    <div>
                        <div className="flex justify-center">
                            {
                                ["<","1","2","3","4","5",">"].map((value,index)=> {
                                    return <div className="w-8 h-8 border border-grey rounded-full flex justify-center heif leading-7 ">
                                    <div>{value}</div>
                                </div>
                                })
                            }
                        
                        </div>                        
                    </div>
                    </div>  
                </div>
            </div>
            <div className="container mx-auto mb-5">
                <div className="flex justify-center mt-8 ">
                    <div className="w-10 h-1 border bg-blue-800 mt-6"></div>
                </div>
                <div className="flex justify-center mt-2">
                        <div className="font-bold" > Categories</div>
                </div>
                <div className="flex flex-wrap mt-12">
                    {
                        [...Array(3)].map((value,index)=> {
                            return <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ">
                            <div className="relative ">
                                <div className="">
                                    <img src="https://images.bewakoof.com/nav_menu/men-clearance-desk-1574322912.jpg" className="xs:w-72"/>
                                </div>
                                <div className="absolute bottom-0 pb-3 pl-5" >
                                    <div className="text-white font-lg text-xs" >COLLECTIONS</div>
                                    <div className="text-white font-lg text-xl" >Women</div>
                                </div>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}