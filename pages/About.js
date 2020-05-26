import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Bidge from '../components/Bidge'
import Footer from '../components/Footer'
export default function About() {
    return(
        <>
            
              <Header />
              <Navbar />
              <Bidge />
           
              <div className="container mx-auto mt-10">
                   <div className="flex flex-wrap ">
                        <div className='w-full md:w-1/2'>
                            <img className="rounded" src="https://previews.123rf.com/images/axelbueckert/axelbueckert1604/axelbueckert160400015/56601739-clothes-rack-with-vintage-second-hand-women-s-fashion-filtered-image-with-sun-flare-.jpg"/>    
                        </div>
                        <div className='w-full md:w-1/2 '>  
                            <div className="pl-10">
                                <div className="w-10 h-1 border bg-blue-800 "></div>
                                <div className="font-bold mb-2" >How We Started</div>
                                <p>You can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, p*2>lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our texYou can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, p*2>lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our texYou can type lorem and then tab and it will expand into a paragraph of completely random sentences. For example, p*2>lorem abbreviation would generate a 2-paragraph text. We can change this value and customise our tex</p>
                                <p>You can type lorem and then tab and it will expand into We can change this value and customise our text  will expand into We can change this value and customise our tex will expand into We can change this value and customise our tex </p>
                            </div>                     
                        </div>
                   </div> 
                   <div className="flex justify-center mt-8 ">
                   <div className="w-10 h-1 border bg-blue-800 mt-6"></div>
               </div>
               <div className="flex justify-center mt-2">
                    <div className="font-bold" >The Team</div>
               </div>  
               <div className="mb-10">
                   <div className="flex flex-wrap mt-6">
                       {
                           [...Array(4)].map((value,index)=> {
                               return <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
                               <div className="px-5">
                                   <div className="flex justify-center">
                                       <img src="shirt2.jpg" className=" rounded-full h-24 w-24" />
                                   </div>
                                   <div className="text-center font-bold">Elexa</div>
                                   <p className="text-center">We can change this value and customise our tex will expand into We can change this value and customise our tex</p>
                               </div>
                           </div>  
                           })
                       }  
                   </div>
                   <div className="flex flex-wrap mt-12 ">
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
                </div>
            </div>   
            <Footer />
        </>
    )
}