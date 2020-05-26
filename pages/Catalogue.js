import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Bidge from '../components/Bidge'
import Footer from '../components/Footer'
export default function Catalogue() {
    return(
        <div>
            <Header />
            <Navbar />
            <Bidge />
            <div className="container mx-auto">
            <table class="border-collapse w-full mt-5">
                <thead>
                    <tr>
                        <th class="p-3 font-bold uppercase bg-white-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                        <th class="p-3 font-bold uppercase bg-white-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                        <th class="p-3 font-bold uppercase bg-white-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                        <th class="p-3 font-bold uppercase bg-white-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                        <th class="p-3 font-bold uppercase bg-white-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
                            <div className="flex justify-center"><img src="shirt2.jpg" className="w-10 " /></div>
                            
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product</span>
                            Top Up T-shirt 
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            $4900
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Total</span>
                            $4390
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Remove</span>
                            <div className="flex justify-center"><div className="bg-blue-700 w-10">X</div></div>
                        </td>
                        
                    </tr>
                    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
                            <div className="flex justify-center"><img src="shirt2.jpg" className="w-10 " /></div>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product</span>
                            Polo Shirt
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            $4900
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Total</span>
                            $5690
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Remove</span>
                            <div className="flex justify-center"><div className="bg-blue-700 w-10">X</div></div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <div className="flex flex-wrap my-5 ">
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-12 mx-3 ">UPDATE CART</button>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ">CONTINUE SHOPING</button>
                    <div className="mt-8 font-bold text-xl my-3">Coupon</div>
                    <div className="text-gray-700 my-3">Enter your coupon code if you have one </div>
                    <div className=" flex flex-wrap">
                    <input class=" appearance-none border-2 border-gray-200 rounded mx-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow bg-blue-500 ">APPLY COUPON</button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3"></div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <div className="text-right font-bold text-xl"> CART TOTALS</div>
                    <div className="h-1 mt-3 w-full bg-gray-300"></div>
                    {
                        [...Array(2)].map((value,index)=> {
                            return <div className="flex flex-wrap justify-between">
                            <div className="my-5">Subtotal</div>
                            <div className="my-5">Subtotal</div>
                        </div>
                        })
                    }
                    <button class="bg-white hover:bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow bg-blue-500 ">PROCEED TO CHECKOUT </button>
                </div>
            </div>
            </div>
        <Footer /> 
        </div>
    )
}