import Cart from "./Cart"
import Tech from "./Tech"
import EducationItem from "./Education"
import { useState } from "react"

const Main = () => {
  const [ front, setFront ] = useState(false)
  const [ back, setBack ] = useState(false)
  const [ data, setData ] = useState(false)
  const [ more, setMore ] = useState(false)

  return (
    <main className='flex flex-col justify-center items-center dark:bg-dark-default  font-inter'>
      <section className="bg-gray-50 dark:bg-dark-secondary w-full p-4 py-16 md:px-10 lg:px-20 flex flex-col justify-center items-center">
        <article className="max-w-screen-xl lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2 id="about" className="text-center font-bold text-2xl mb-6 md:text-2xl xl:text-3xl dark:text-dark-title">About me</h2>
          <p className="mb-6 text-center text-gray-600 dark:text-dark-subtitle lg:w-[60%]">{"I'm passionate about motorcycles, sports, and nutrition, finding joy in staying active and healthy through exercise and balanced eating habits. Riding through nature on my motorcycle is my ideal way to clear my mind."}</p>
          <p className="text-gray-600 text-center lg:w-[60%] dark:text-dark-subtitle">{"I'm always eager to learn and grow in all aspects of life, believing strongly in maintaining an active lifestyle and continually seeking knowledge to thrive both personally and professionally."}</p>
        </article>
      </section>

      <section className="w-full p-4 py-16 md:px-10 lg:px-20 max-w-screen-2xl ">
        <h2 id="projects" className="text-center font-bold text-2xl mb-6 md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title">Projects</h2>
        <section className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-6">
          <Cart
            img={"/img/short.png"}
            title={"URL shortener"}
            description={"his is a real-time cryptocurrency quote tool, featuring the day's most important news in the crypto world."}
            urlGit={"https://github.com/naviotech/ShortUrlApp"}
            urlWeb={"https://shorturlapp-mayadevv.netlify.app/"}
            tecnologias={["Html", "javaScript", "Css"]}
          />
          
          <Cart
            img={"/img/coinmarket.png"}
            title={"Crypto quote"}
            description={"A cryptocurrency converter allows users to quickly convert between different cryptocurrencies and traditional currencies. It provides real-time exchange rates and supports a variety of cryptocurrencies, offering a convenient tool for tracking and managing crypto investments."}
            urlGit={"https://github.com/naviotech/CoinMarketWatch"}
            urlWeb={"https://coin-market-watch.netlify.app/"}
            tecnologias={["Html", "JavaScript", "TailwindCss", "Vite"]}
          />

          <Cart
            img={"/img/Fitness.png"}
            title={"Fitness Calculator"}
            description={"An app that calculates the meals you consume throughout the day along with the exercise you do, and generates a total energy balance for your day."}
            urlGit={"https://github.com/naviotech/Fitness-Calculator"}
            urlWeb={"https://fitnesscalculator.netlify.app/"}
            tecnologias={["Html", "JavaScript", "TailwindCss", "Vite", "React", "TypeScript"]}
          />

          <Cart
            img={"/img/parejas.png"}
            title={"Matching pairs game"}
            description={"Animal matching pairs game with a timer."}
            urlGit={"https://github.com/naviotech/Juego-encontrar-parejas"}
            urlWeb={"https://encontrar-parejas.netlify.app/"}
            tecnologias={["Html", "JavaScript", "Vite", "React"]}
          />

          <Cart
            img={"/img/Ecomerce.png"}
            title={"Headphones e-commerce"}
            description={"Headphones e-commerce with integrated store and simulated payment."}
            urlGit={"https://github.com/naviotech/Ecomerce"}
            urlWeb={"https://ecomerce-mayadevv.netlify.app/"}
            tecnologias={["Html", "JavaScript", "Vite", "Sass", "Css"]}
          />

          <Cart
            img={"/img/Guitar.png"}
            title={"Guitar Shop"}
            description={"Project of a guitar store with an included shopping cart."}
            urlGit={"https://github.com/naviotech/guitarShop"}
            urlWeb={"https://guitarshoop.netlify.app/"}
            tecnologias={["Html", "JavaScript", "TailwindCss","React" ]}
          />
        </section>
      </section>

      <section className="bg-gray-50 w-full p-4 py-16 md:px-10 lg:px-20 flex flex-col justify-center items-center dark:bg-dark-secondary">
        <article className="w-full max-w-screen-xl">
          <h2 className="text-center font-bold text-2xl mb-6 md:text-2xl xl:text-3xl dark:text-dark-title">Skills</h2>
          <div className="flex flex-col justify-start items-start gap-6 md:justify-center md:items-center">
            <article className="w-full flex flex-col">
              <button className="self-center flex items-center justify-center gap-1 text-lg text-white bg-gray-900 dark:bg-black py-1 px-4 rounded-xl" value={front} onClick={()=>{ front ? setFront(false): setFront(true), setBack(false), setData(false),setMore(false)}}>Frontend {front ? (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff" d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                  </svg>
                </span>
              ): (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff" d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </span>
              )}</button>
              {front &&(
              <div className="flex mt-4 flex-wrap gap-4 w-full justify-center md:justify-center lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={"/svg/html.svg"} title={"Html"}/>
                  <Tech img={"/svg/css.svg"} title={"Css"}/>
                  <Tech img={"/svg/sass.svg"} title={"Sass"}/>
                  <Tech img={"/svg/tailwind.svg"} title={"Tailwind"}/>
                  <Tech img={"/svg/javascript.svg"} title={"JavaScript"}/>
                  <Tech img={"/svg/typescript.svg"} title={"TypeScript"}/>
                  <Tech img={"/svg/react.svg"} title={"React"}/>
              </div>
              )}
              
            </article>
            <article className="w-full flex flex-col">
              <button className=" self-center flex items-center justify-center gap-1 text-lg text-white bg-gray-900 py-1 dark:bg-black px-4 rounded-xl" value={back} onClick={()=>{ back ? setBack(false): setBack(true), setFront(false), setData(false),setMore(false)}}>Backend {back ? (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff"  d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                  </svg>
                </span>
              ): (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff"  d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </span>
                )}</button>
                {back &&(
                <div className="flex mt-4 flex-wrap gap-4 w-full justify-center  lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={"/svg/python.svg"} title={"Python"}/>
                  <Tech img={"/svg/django.svg"} title={"Django"}/>
                  <Tech img={"/svg/node.svg"} title={"Node.js"}/>
                  <Tech img={"/svg/express.svg"} title={"Express.js"}/>
                  
                </div>
              )}
            </article>
            <article className="w-full flex flex-col">
              <button className="self-center flex items-center justify-center gap-1 text-lg text-white bg-gray-900 dark:bg-black py-1 px-4 rounded-xl" value={data} onClick={()=>{ data ? setData(false): setData(true), setBack(false), setFront(false),setMore(false)}}>Database {data ? (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff"  d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                  </svg>
                </span>
              ): (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff"  d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </span>
                )}</button>
                {data &&(
                <div className="flex mt-4 flex-wrap gap-4 w-full justify-center  lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={"/svg/mongodb.svg"} title={"MongoDb"}/>
                  <Tech img={"/svg/mysql.svg"} title={"MySql"}/>
                </div>
              )}
            </article>
            <article className="w-full flex flex-col">
              <button className="self-center flex items-center justify-center gap-1 text-lg text-white bg-gray-900 dark:bg-black py-1 px-4 rounded-xl" value={more} onClick={()=>{ more ? setMore(false): setMore(true), setBack(false), setData(false),setFront(false)}}>More {more ? (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff" d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                  </svg>
                </span>
              ): (
                <span>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                    <path fill="#ffffff" d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                  </svg>
                </span>
                )}</button>
                {more &&(
                <div className="flex mt-4 flex-wrap gap-4 w-full justify-center lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={"/svg/gittech.svg"} title={"Git"}/>
                  <Tech img={"/svg/jest.svg"} title={"Jest"}/>
                  <Tech img={"/svg/npm.svg"} title={"Npm"}/>
                  <Tech img={"/svg/figma.svg"} title={"Figma"}/>
                  <Tech img={"/svg/canva.svg"} title={"Canva"}/>
                  
                </div>
              )}
            </article>
          </div>

        </article>
      </section>

      <section className="w-full p-4 py-16 md:px-10 lg:px-20 max-w-screen-2xl lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h2 className="text-center font-bold text-2xl mb-6 md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title">Experience</h2>
        <p className="mb-6 text-center text-gray-600 dark:text-dark-subtitle lg:w-[60%]" >{"Although I don’t yet have professional experience in the development world, I have invested a lot of time and effort into learning and creating projects on my own."}</p>  
        <p className="text-gray-600 text-center dark:text-dark-subtitle lg:w-[60%]">{"Instead of seeing this as a disadvantage, I believe it has allowed me to be self-taught and develop problem-solving abilities in a certain way. I’m always looking for challenges that allow me to grow and improve my skills."}</p>
      </section>

      <section className="bg-gray-50 dark:bg-dark-secondary w-full p-4 py-16 md:px-10 lg:px-20 flex flex-col justify-center items-center">
        <article className="w-full max-w-screen-xl flex flex-col justify-center items-center">
          <h2 id="education" className="text-center font-bold text-2xl mb-6 md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title">Education</h2>
          <div className="flex flex-col gap-6 max-w-screen-md w-full">
            <EducationItem
              type={"Master's degree"}
              institution={"ConquerX"}
              degree={"Full stack"}
              startDate={"sep. 2022"}
              endDate={"oct. 2024"}
            />
            <EducationItem
              type={"Course"}
              institution={"Udemy"}
              degree={"Tailwind"}
              startDate={"may. 2024"}
              endDate={"may. 2024"}
            />
            <EducationItem
              type={"Course"}
              institution={"Udemy"}
              degree={"JavaScript"}
              startDate={"sep. 2023"}
              endDate={"may. 2024"}
            />
            <EducationItem
              type={"Course"}
              institution={"Harvard University"}
              degree={"CS50 SQL"}
              startDate={"jan. 2023"}
              endDate={"dec. 2023"}
            />
            <EducationItem
              type={"Course"}
              institution={"Harvard University"}
              degree={"CS50 Python"}
              startDate={"jan. 2023"}
              endDate={"oct. 2023"}
            />
            <EducationItem
              type={"CFGS"}
              institution={"Cedesca"}
              degree={"Higher Technician in Nutrition"}
              startDate={"sep. 2017"}
              endDate={"jan. 2019"}
            />
            
            
          </div>

        </article>
      </section>
    </main>
  )
}

export default Main
