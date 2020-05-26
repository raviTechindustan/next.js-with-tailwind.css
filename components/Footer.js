import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <div className="container mx-auto">
                  <div className="flex flex-wrap border ">
                        <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                              dfs
                        </div>
                        <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                              dfs
                        </div>
                        <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                              dfs
                        </div>
                        <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                              dfs
                        </div>
                  </div>
            </div>  */}
           
                  {/* <div className="flex flex-wrap border">
                        <div className=" md:w-1/2 lg:w-1/2 border">
                              <div className="bg-red-300">
                                    <p className="text-lg">
                                          losdfksfksmdkfsmkdfskfmkskfdms      
                                    </p>  
                              </div> 
                        </div>
                        <div className="   md:w-1/2 lg:w-1/2 border">
                              <div className="bg-red-600">
                                    <div className="flex flex-wrap border ">
                                          <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                                                dfs
                                          </div>
                                          <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                                                dfs
                                          </div>
                                          <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                                                dfs
                                          </div>
                                          <div className=" w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
                                                dfs
                                          </div>
                                    </div>      
                              </div>
                              
                        </div>
                  </div> */}

            <div className="container mx-auto">
                  <div className="flex flex-wrap "> 
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                              <div className="flex flex-wrap">
                                    <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                                          <h2 className="font-semibold">Navigations</h2>  
                                          <div>Sell Online</div>
                                          <div>Feature</div>
                                          <div>Shopping Cart</div>
                                          <div>Store buildera</div>
                                    </div>
                                    <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                                          <div className="mt-5">Mobile commerce</div>
                                          <div>Dropshipping</div>
                                          <div>Website development</div>   
                                    </div>
                                    <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                                          <div className="mt-5">Point of sale</div>
                                          <div>Hardware</div>
                                          <div>Software</div>
                                    </div>
                              </div>
                              
                        </div>
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                              <div className="flex flex-wrap">
                                    <div className="w-1/2 pr-3sm:w-1/2 md:w-1/2 sm:pr-3">
                                          <h2 className="font-semibold">Promo</h2>
                                          <div className="w-full h-32 bg-green-300">
                                                <img src="shoes.png" className="w-32 mt-3 pt-3 ml-3"/>
                                          </div>
                                    </div>
                                    <div className="w-1/2 sm:w-1/2 md:w-1/2 ">
                                          <h2 className="font-semibold">Contact info</h2>  
                                          <div className="my-2"><i className="fas fa-map-marker-alt fa-lg text-purple-700 "></i>{` `}Address #789/3 mohali nepal</div>
                                          
                                          <div className="my-2"><i className="fas fa-phone-alt fa-lg text-purple-700"></i>{` `}94923892822</div>
                                          <div className="my-2"><i className="fas fa-envelope fa-lg text-purple-700"></i>{` `}emailaddress@domain.com</div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
            
        </div>
    )
}