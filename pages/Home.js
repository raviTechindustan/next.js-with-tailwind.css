import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
    return(
        <div>
           <Header />
           <Navbar />
            <div className="flex flex-wrap bg-green-300 ">
                <div className="w-1/2 md:w-1/2">
                <img src="/shoes.png " alt="shoesImage" className="Homeshoes h-64  float-right my-12  lg:mx-6"/>
                </div>
                <div className="w-1/2 md:w-1/2">
                   <div className="my-16">
                       <div className="text-xl font-bold">Finding Your </div>
                       <div className="text-xl font-bold mb-1">perfect shoes</div>
                       <div>Lorem Ipsum is simply dummy text of the printing and 
                        <div>typesetting industry. Lorem Ipsum has been the industry's</div>     
                            standard dummy text ever since the 1500s</div>
                       <button className="bg-indigo-700 mt-3 hover:bg-blue-700 text-white  .text-sm py-1 px-2 ">
                            SHOP NOW
                        </button>
                   </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap mt-12">
                    {
                        [...Array(3)].map((value,index)=> {
                            return <div key={index} className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3" >
                            <div className="flex flex-wrap">
                                 <div><i className="fas fa-truck  fa-2x fa-flip-horizontal text-purple-800"></i></div>
                                 <div className="pl-3">
                                     <div>FREE SHIPING</div>
                                     <div>Lorem Ipsum is simply dummy text of the </div>
                                     <div>typesetting industry. Lorem Ipsum has been</div>
                                     <div>standard dummy text ever since the 1500s</div> 
                                 </div>  
                            </div>
                         </div>
                        })
                    }
                </div>
                
                <div className="flex flex-wrap mt-12">
                    {
                        [...Array(3)].map((value,index)=> {
                            return <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 ">
                            <div className="relative">
                                <div >
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
            <div className="bg-gray-200">
                <div className="flex justify-center mt-8 ">
                   <div className="w-10 h-1 border bg-blue-800 mt-6"></div>
               </div>
               <div className="flex justify-center mt-2">
                    <div className="font-bold" >Featured Products</div>
               </div>
               <div className="container mx-auto">
                    <div className="flex flex-wrap mt-12 pb-8">
                        {
                            [...Array(3)].map((value,index)=> {
                                return  <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 -px-2 -py-3"> 
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                </div>
            </div>
            <div>
                <div className="flex justify-center mt-5 ">
                   <div className="w-10 h-1 border bg-blue-800"></div>
               </div>
               <div className="flex justify-center mt-2">
                    <div className="font-bold mb-5" >Big Sale!</div>
               </div>
               <div className="container mx-auto mb-10">
                   <div className="flex flex-wrap">
                        <div className='w-full md:w-1/2'>
                            <img className="rounded" src="https://previews.123rf.com/images/axelbueckert/axelbueckert1604/axelbueckert160400015/56601739-clothes-rack-with-vintage-second-hand-women-s-fashion-filtered-image-with-sun-flare-.jpg"/>    
                        </div>
                        <div className='w-full md:w-1/2 '>
                            <div className="mt-12">
                                <div class="font-bold text-xl mb-2 text-center  ">50% less in all items</div>
                                <p class="text-gray-700 text-base text-center px-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                                <div className="flex justify-center">
                                    <button className="bg-indigo-700 mt-3 hover:bg-blue-700 text-white  .text-sm py-1 px-2 ">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                   </div>   
               </div>
            </div> 
            <Footer/> 
        </div>
    )
}