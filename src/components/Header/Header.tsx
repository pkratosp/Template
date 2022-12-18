import { Moon } from 'phosphor-react'

export default function Header(){
    return(
        <header>
            <nav className="py-4 bg-white fixed top-0 w-full shadow-2xl">
                <div className="flex justify-between">
                    <div className="flex mx-4">
                        <img className="p-2" src="../../public/logo.svg" alt="Logo"/>
                    </div>

                    <div className="flex">
                        <div className="py-3 px-4">
                            <a className="text-xl text-texto_cinza hover:text-violet-500 duration-200" href="">Features</a>
                        </div>
                        <div className="py-3 px-4">
                            <a className="text-xl text-texto_cinza hover:text-violet-500 duration-200" href="">About</a>
                        </div>
                        <div className="py-3 px-4">
                            <a className="text-xl text-texto_cinza hover:text-violet-500 duration-200" href="">Pricing</a>
                        </div>
                        <div className="py-3 px-4">
                            <a className="text-xl text-texto_cinza hover:text-violet-500 duration-200" href="">Reviews</a>
                        </div>
                        <div className="py-3 px-4">
                            <a className="text-xl text-texto_cinza hover:text-violet-500 duration-200" href="">Contact</a>
                        </div>
                    </div>    

                    <div className="flex">
                        <button 
                            className="p-4 mx-4 bg-violet-700 text-white rounded-2xl shadow-2xl hover:bg-violet-500 duration-300"
                        >
                            Download
                        </button>
                        <button className="p-2">
                            <Moon size={42} className="hover:text-gray-500 duration-300"/>    
                        </button> 
                    </div>                 
                </div>
            </nav>
        </header>
    )
}