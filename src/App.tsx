import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Description from './components/Description/Description'
import DescriptionSelect from './components/Description/DescriptionSelect/DescriptionSelect'
import Header from './components/Header/Header'


function App() {


  return (
    <div>
      <Header></Header>
      
      <div className="mt-28"></div>

      <div 
        className="w-[96%] m-auto my-4 py-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl 
        h-screen"
      >

        <div className="flex">
          <div className="w-1/2 p-10">
            <h2 className="text-4xl py-2 font-semibold">Tailwind CSS Template for Apps and Software</h2>

            <p className="text-white text-lg font-medium py-6">All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.</p>

            <button 
              className="bg-violet-700 hover:bg-violet-900 duration-300 py-5 px-8 rounded-2xl text-white text-xl"
            >
              Explore
            </button>
          </div>

          <div className="w-1/2">
            <img
              src="./public/image-1.svg"
              alt="image1"
              className="m-auto"
            /> 
          </div>
        </div>

      </div>

      <Description 
        title="Our Recent Awards" 
        description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      ></Description>

      <div className="flex">
        <Cards
          title="titulo"
          description="Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula."
          descriptionLink="link do google"
          link="https://www.google.com/"
          subTitle="Best of trendy design in 2024 on Awwwards"
        ></Cards>
        <Cards
          title="titulo"
          description="Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula."
          descriptionLink="link do google"
          link="https://www.google.com/"
          subTitle="Best of trendy design in 2024 on Awwwards"
        ></Cards>
        <Cards
          title="titulo"
          description="Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula."
          descriptionLink="link do google"
          link="https://www.google.com/"
          subTitle="Best of trendy design in 2024 on Awwwards"
        ></Cards>
      </div>

      <div className="flex justify-between items-center my-14">
        <img 
          className="h-screen m-auto"
          src="./public/image-2.svg" 
          alt="image1"
        />

        <DescriptionSelect
          descriptionTitle="About Application"
          title="Instant Payment Transfer SavesYou Time"
          description="Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule."
          linkDescription="Know More About App"
        ></DescriptionSelect>


      </div>

    </div>
  )
}

export default App
