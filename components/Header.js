import React from 'react'

export default function Header() {
    return(
        <>
            <div className="container mx-auto mt-3 ">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row mt-1">
                    <i className="fas fa-search fa-lg mt-1"></i><div className="ml-3 text-lg">search</div>
                    </div>
                    <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent ">
                        E-MART
                    </button>
                    <div className="mt-1">
                    <i className="far fa-user fa-lg mx-2" ></i>
                    <i className="far fa-heart fa-lg mx-2" ></i>
                    <i className="fas fa-cart-plus fa-lg mx-2"></i>
                    </div>
                </div>
            </div>
        </>
    )

    
}