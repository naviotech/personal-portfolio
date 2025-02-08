import Cart from './Cart'
import Tech from './Tech'
import EducationItem from './Education'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Experience from './Experience'

const Main = () => {
  const [front, setFront] = useState(false)
  const [back, setBack] = useState(false)
  const [data, setData] = useState(false)
  const [more, setMore] = useState(false)

  const [show, setShow] = useState(false)

  const [t] = useTranslation('global')

  return (
    <main className="flex flex-col items-center justify-center dark:bg-dark-default font-inter">
      <section className="flex flex-col items-center justify-center w-full p-4 py-16 bg-gray-50 dark:bg-dark-secondary md:px-10 lg:px-20">
        <article className="max-w-screen-xl lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2
            id="about"
            className="mb-6 text-2xl font-bold text-center md:text-2xl xl:text-3xl dark:text-dark-title"
          >
            {t('main.aboutMe.title')}
          </h2>
          <p className="mb-6 text-center text-gray-600 dark:text-dark-subtitle lg:w-[60%]">
            {t('main.aboutMe.aboutP1')}
          </p>
          <p className="text-gray-600 text-center lg:w-[60%] dark:text-dark-subtitle">
            {t('main.aboutMe.aboutP2')}
          </p>
        </article>
      </section>

      <section className="flex flex-col items-center justify-center w-full p-4 py-16 md:px-10 lg:px-20 max-w-screen-2xl">
        <h2
          id="projects"
          className="mb-6 text-2xl font-bold text-center md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title"
        >
          {t('main.projects.title')}
        </h2>
        <section className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-6">
          <Cart
            img={'./img/short.png'}
            title={t('main.projects.url')}
            description={t('main.projects.urlp')}
            urlGit={'https://github.com/naviotech/ShortUrlApp'}
            urlWeb={'https://shorturlapp-mayadevv.netlify.app/'}
            tecnologias={['Html', 'javaScript', 'Css']}
          />

          <Cart
            img={'./img/coinmarket.png'}
            title={t('main.projects.cripto')}
            description={t('main.projects.criptop')}
            urlGit={'https://github.com/naviotech/CoinMarketWatch'}
            urlWeb={'https://coin-market-watch.netlify.app/'}
            tecnologias={['Html', 'JavaScript', 'TailwindCss', 'Vite']}
          />

          <Cart
            img={'./img/expense.png'}
            title={t('main.projects.expense')}
            description={t('main.projects.expensep')}
            urlGit={'https://github.com/naviotech/expense-planner'}
            urlWeb={'https://expense-planner-naviotech.netlify.app/'}
            tecnologias={['Html', 'TypeScript', 'Vite', 'React', 'TailwindCss']}
          />

          <Cart
            img={'./img/cocktail.png'}
            title={t('main.projects.cocktail')}
            description={t('main.projects.cocktailp')}
            urlGit={'https://github.com/naviotech/Cocktails-App'}
            urlWeb={'https://cocktail-app-naviotech.netlify.app/'}
            tecnologias={['Html', 'TailwindCss', 'TypeScript', 'Vite', 'React']}
          />

          <Cart
            img={'./img/Ecomerce.png'}
            title={t('main.projects.ecomerce')}
            description={t('main.projects.ecomercep')}
            urlGit={'https://github.com/naviotech/Ecomerce'}
            urlWeb={'https://ecomerce-mayadevv.netlify.app/'}
            tecnologias={['Html', 'JavaScript', 'Vite', 'Sass', 'Css']}
          />

          <Cart
            img={'./img/clone.jpg'}
            title={t('main.projects.weather')}
            description={t('main.projects.weatherp')}
            urlGit={'https://github.com/naviotech/FinalWeatherApp'}
            urlWeb={'https://finalweatherapp-naviotech.netlify.app/'}
            tecnologias={['Html', 'TailwindCss', 'TypeScript', 'Vite', 'React']}
          />
        </section>
        <button
          className="flex items-center self-center justify-center gap-1 px-4 py-1 mt-20 mb-12 text-lg text-white bg-gray-900 dark:bg-black rounded-xl"
          value={show}
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? `${t('main.skills.less')}` : `${t('main.skills.more')}`}{' '}
          {show ? (
            <span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                <path
                  fill="#ffffff"
                  d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                ></path>
              </svg>
            </span>
          ) : (
            <span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                <path
                  fill="#ffffff"
                  d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                ></path>
              </svg>
            </span>
          )}
        </button>
        {show && (
          <section className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-6">
            <Cart
              img={'./img/Guitar.png'}
              title={t('main.projects.guitar')}
              description={t('main.projects.guitarp')}
              urlGit={'https://github.com/naviotech/guitarShop'}
              urlWeb={'https://guitarshoop.netlify.app/'}
              tecnologias={['Html', 'JavaScript', 'TailwindCss', 'React']}
            />

            <Cart
              img={'./img/parejas.png'}
              title={t('main.projects.game')}
              description={t('main.projects.gamep')}
              urlGit={'https://github.com/naviotech/Juego-encontrar-parejas'}
              urlWeb={'https://encontrar-parejas.netlify.app/'}
              tecnologias={['Html', 'JavaScript', 'Vite', 'React']}
            />

            <Cart
              img={'./img/Fitness.png'}
              title={t('main.projects.fitness')}
              description={t('main.projects.fitnessp')}
              urlGit={'https://github.com/naviotech/Fitness-Calculator'}
              urlWeb={'https://fitnesscalculator.netlify.app/'}
              tecnologias={['Html', 'JavaScript', 'TailwindCss', 'Vite', 'React', 'TypeScript']}
            />
          </section>
        )}
      </section>

      <section className="flex flex-col items-center justify-center w-full p-4 py-16 bg-gray-50 md:px-10 lg:px-20 dark:bg-dark-secondary">
        <article className="w-full max-w-screen-xl">
          <h2 className="mb-6 text-2xl font-bold text-center md:text-2xl xl:text-3xl dark:text-dark-title">
            {t('main.skills.title')}
          </h2>
          <div className="flex flex-col items-start justify-start gap-6 md:justify-center md:items-center">
            <article className="flex flex-col w-full">
              <button
                className="flex items-center self-center justify-center gap-1 px-4 py-1 text-lg text-white bg-gray-900 dark:bg-black rounded-xl"
                value={front}
                onClick={() => {
                  front ? setFront(false) : setFront(true), setBack(false), setData(false), setMore(false)
                }}
              >
                Frontend{' '}
                {front ? (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
              {front && (
                <div className="flex flex-wrap justify-center w-full gap-4 mt-4 md:justify-center lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={'./svg/html.svg'} title={'Html'} />
                  <Tech img={'./svg/css.svg'} title={'Css'} />
                  <Tech img={'./svg/tailwind.svg'} title={'Tailwind'} />
                  <Tech img={'./svg/javascript.svg'} title={'JavaScript'} />
                  <Tech img={'./svg/typescript.svg'} title={'TypeScript'} />
                  <Tech img={'./svg/react.svg'} title={'React'} />
                  <Tech img={'./svg/expo.svg'} title={'Expo'} />
                  <Tech img={'./svg/nextjs.svg'} title={'Nextjs'} />
                </div>
              )}
            </article>
            <article className="flex flex-col w-full">
              <button
                className="flex items-center self-center justify-center gap-1 px-4 py-1 text-lg text-white bg-gray-900 dark:bg-black rounded-xl"
                value={back}
                onClick={() => {
                  back ? setBack(false) : setBack(true), setFront(false), setData(false), setMore(false)
                }}
              >
                Backend{' '}
                {back ? (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
              {back && (
                <div className="flex flex-wrap justify-center w-full gap-4 mt-4 lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={'/svg/python.svg'} title={'Python'} />
                  <Tech img={'/svg/django.svg'} title={'Django'} />
                  <Tech img={'/svg/node.svg'} title={'Node.js'} />
                  <Tech img={'/svg/express.svg'} title={'Express.js'} />
                </div>
              )}
            </article>
            <article className="flex flex-col w-full">
              <button
                className="flex items-center self-center justify-center gap-1 px-4 py-1 text-lg text-white bg-gray-900 dark:bg-black rounded-xl"
                value={data}
                onClick={() => {
                  data ? setData(false) : setData(true), setBack(false), setFront(false), setMore(false)
                }}
              >
                {t('main.skills.database')}{' '}
                {data ? (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
              {data && (
                <div className="flex flex-wrap justify-center w-full gap-4 mt-4 lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={'/svg/mongodb.svg'} title={'MongoDb'} />
                  <Tech img={'/svg/mysql.svg'} title={'MySql'} />
                  <Tech img={'/svg/postgresql.svg'} title={'PostgreSQL'} />
                  <Tech img={'/svg/prisma.svg'} title={'Prisma ORM'} />
                </div>
              )}
            </article>
            <article className="flex flex-col w-full">
              <button
                className="flex items-center self-center justify-center gap-1 px-4 py-1 text-lg text-white bg-gray-900 dark:bg-black rounded-xl"
                value={more}
                onClick={() => {
                  more ? setMore(false) : setMore(true), setBack(false), setData(false), setFront(false)
                }}
              >
                {more ? `${t('main.skills.less')}` : `${t('main.skills.more')}`}{' '}
                {more ? (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                      <path
                        fill="#ffffff"
                        d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
              {more && (
                <div className="flex flex-wrap justify-center w-full gap-4 mt-4 lg:gap-8 md:mt-6 lg:mt-12 md:mb-4 lg:mb-10">
                  <Tech img={'/svg/gittech.svg'} title={'Git'} />
                  <Tech img={'/svg/jest.svg'} title={'Jest'} />
                  <Tech img={'/svg/npm.svg'} title={'Npm'} />
                  <Tech img={'/svg/figma.svg'} title={'Figma'} />
                  <Tech img={'/svg/canva.svg'} title={'Canva'} />
                </div>
              )}
            </article>
          </div>
        </article>
      </section>

      <section className="w-full p-4 py-16 md:px-10 lg:px-20 max-w-screen-2xl lg:flex lg:flex-col lg:justify-center lg:items-center">
        <article className="flex flex-col items-center justify-center w-full max-w-screen-xl">
          <h2 className="mb-6 text-2xl font-bold text-center md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title">
            {t('main.experience.title')}
          </h2>
          <div className="flex flex-col w-full max-w-screen-md gap-6">
          <Experience
            company={'NeedCarHelp'}
            role={'Full stack'}
            startDate={`${t('main.education.Agosto')} 2024`}
            endDate={t('main.education.present')}
            description={t('main.experiences.need')}
          />
          </div>
        </article>
      </section>

      <section className="flex flex-col items-center justify-center w-full p-4 py-16 bg-gray-50 dark:bg-dark-secondary md:px-10 lg:px-20">
        <article className="flex flex-col items-center justify-center w-full max-w-screen-xl">
          <h2
            id="education"
            className="mb-6 text-2xl font-bold text-center md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title"
          >
            {t('main.education.title')}
          </h2>
          <div className="flex flex-col w-full max-w-screen-md gap-6">
            <EducationItem
              type={t('main.education.master')}
              institution={'ConquerX'}
              degree={'Full stack'}
              startDate={`${t('main.education.Septiembre')} 2022`}
              endDate={t('main.education.present')}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Universidad de Nebrija'}
              degree={'UX'}
              startDate={`${t('main.education.Agosto')} 2024`}
              endDate={`${t('main.education.Febrero')} 2025`}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Udemy'}
              degree={'Nextjs'}
              startDate={`${t('main.education.Agosto')} 2024`}
              endDate={`${t('main.education.Septiembre')} 2024`}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Udemy'}
              degree={'React'}
              startDate={`${t('main.education.Mayo')} 2024`}
              endDate={`${t('main.education.Septiembre')} 2024`}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Udemy'}
              degree={'JavaScript'}
              startDate={`${t('main.education.Septiembre')} 2023`}
              endDate={`${t('main.education.Mayo')} 2024`}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Harvard University'}
              degree={'CS50 SQL'}
              startDate={`${t('main.education.Enero')} 2023`}
              endDate={`${t('main.education.Diciembre')} 2023`}
            />
            <EducationItem
              type={t('main.education.course')}
              institution={'Harvard University'}
              degree={'CS50 Python'}
              startDate={`${t('main.education.Enero')} 2023`}
              endDate={`${t('main.education.Octubre')} 2023`}
            />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Main
