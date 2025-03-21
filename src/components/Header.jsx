import { useTranslation } from 'react-i18next'

// eslint-disable-next-line react/prop-types
const Header = ({ theme, handleSun, handleMoon }) => {
  const [t, i18n] = useTranslation('global')

  return (
    <header className="flex flex-col items-center justify-center p-4 md:px-10 lg:px-20 font-inter dark:bg-dark-default">
      <nav className="flex items-center justify-between w-full max-w-screen-xl dark:bg-dark-default">
        <h1 className="text-2xl font-bold dark:text-dark-title">
          <a href="">{'<EN />'}</a>
        </h1>

        <input type="checkbox" id="menu" className="hidden peer/menu" />
        <label
          htmlFor="menu"
          className="z-20 w-10 h-10 transition-all duration-100 bg-center bg-cover rounded-lg cursor-pointer dark:bg-menu-burguer-dark bg-menu-burguer bg-green-color peer-checked/menu:bg-menu-close dark:peer-checked/menu:bg-menu-close-dark md:hidden"
        ></label>

        <div className="drop hidden h-full w-[100%] absolute right-0 top-0 z-10 p-4 bg-white dark:bg-dark-default peer-checked/menu:block transition-all md:flex md:flex-row md:gap-4 md:relative md:w-[85%] md:h-auto md:bg-none md:justify-end md:text-sm md:items-center lg:gap-12">
          <h2 className="py-1 mb-6 text-2xl font-bold md:hidden dark:text-dark-title">
            <a href="">{'<EN />'}</a>
          </h2>
          <hr className="md:hidden" />
          <ul className="flex flex-col justify-center items-center gap-2 text-xl mt-6 mb-6 md:flex-row md:p-3 md:gap-2 lg:gap-6 lg:max-w-[60%]">
            <li className="text-gray-500 transition-all duration-200 cursor-pointer hover:text-black hover:transform md:text-base lg:text-lg lg:text-black lg:hover:font-bold dark:text-dark-title dark:hover:scale-110 dark:hover:text-dark-title">
              <a href="#about">{t('header.about')}</a>
            </li>
            <li className="text-gray-500 transition-all duration-200 cursor-pointer hover:text-black hover:transform md:text-base lg:text-lg lg:text-black lg:hover:font-bold dark:text-dark-title dark:hover:scale-110 dark:hover:text-dark-title">
              <a href="#projects">{t('header.projects')}</a>
            </li>
            <li className="text-gray-500 transition-all duration-200 cursor-pointer hover:text-black hover:transform md:text-base lg:text-lg lg:text-black lg:hover:font-bold dark:text-dark-title dark:hover:scale-110 dark:hover:text-dark-title">
              <a href="#education">{t('header.education')}</a>
            </li>
            <li className="text-gray-500 transition-all duration-200 cursor-pointer hover:text-black hover:transform md:text-base lg:text-lg lg:text-black lg:hover:font-bold dark:text-dark-title dark:hover:scale-110 dark:hover:text-dark-title">
              <a href="#contact">{t('header.contatc')}</a>
            </li>
          </ul>
          <hr className="md:hidden" />
          <div className="flex items-center justify-between">
            {theme === 'dark' && (
              <div onClick={handleMoon} className="flex justify-center w-full mt-6 mb-6 cursor-pointer">
                <svg
                  className="transition-transform duration-200 cursor-pointer hover:transform hover:scale-110"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V4"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20V22"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.92993 4.92999L6.33993 6.33999"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6599 17.66L19.0699 19.07"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H4"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12H22"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.33993 17.66L4.92993 19.07"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.0699 4.92999L17.6599 6.33999"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            {theme == 'light' && (
              <div onClick={handleSun} className="flex justify-center w-full mt-6 mb-6 cursor-pointer">
                <svg
                  className="transition-transform duration-200 cursor-pointer hover:transform hover:scale-110"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
                    stroke="#6b7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3V7"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 5H17"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="flex justify-center w-full gap-3 mb-10 md:w-auto md:m-0 ">
            <button onClick={() => i18n.changeLanguage('es')} className="text-3xl">
              🇪🇸
            </button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-3xl">
              🇺🇸
            </button>
          </div>
          <div className="flex items-center justify-center w-full cursor-pointer md:hidden">
            <a
              href="/cv.pdf"
              download={'cv.pdf'}
              className="min-w-full py-2 font-bold text-center text-white bg-gray-900 rounded-lg dark:bg-dark-title dark:text-black hover:bg-gray-900/50 hover:text-black md:text-sm dark:hover:bg-slate-500 dark:hover:text-dark-title"
            >
              {t('header.cv')}
            </a>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-12 py-16 md:flex-row-reverse md:items-center md:justify-center md:gap-0">
        <figure className="w-[60%] margin-auto  flex flex-col justify-center items-center drop-shadow-xl md:w-[30%] lg:w-[50]">
          <img
            className="drop-shadow-xl rounded-full w-[100%]"
            src="./img/IMG_4378.jpeg"
            alt="personal-image"
            title="it's me"
          ></img>
        </figure>

        <article className="md:w-[60%]">
          <h1 className="mb-2 text-2xl lg:text-4xl dark:text-dark-title">
            {t('header.soy')} <strong>Edu</strong> 🙋🏼‍♂️,
          </h1>
          <p className="text-black lg:text-xl dark:text-white md:w-[80%]">{t('header.presentation')}</p>
          <div className="flex gap-2 mt-10">
            <img src="./svg/ubication.svg"></img>
            <p className="dark:text-dark-subtitle">{t('header.ubication')}</p>
          </div>
          <div className="flex items-center justify-start gap-4 mt-6 mb-6">
            <a href="https://github.com/naviotech" target="_blank" className="transition-all hover:scale-110">
              <img src="./svg/git.svg"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/naviomaya"
              target="_blank"
              className="transition-all hover:scale-110"
            >
              <img src="./svg/linkedin.svg"></img>
            </a>
            <a href="mailto:enavio.tech@gmail.com" target="_blank" className="transition-all hover:scale-110">
              <img src="./svg/mail.svg"></img>
            </a>
          </div>
          <div className="md:w-[40%] hidden  md:justify-center md:flex md:items-center cursor-pointer">
            <a
              href="/cv.pdf"
              download={'cv.pdf'}
              className="min-w-full py-3 font-bold text-center text-white bg-gray-900 rounded-lg dark:bg-dark-title dark:text-black hover:bg-gray-900/50 hover:text-black md:text-sm dark:hover:bg-slate-500 dark:hover:text-dark-title"
            >
              {t('header.cv')}
            </a>
          </div>
        </article>
      </section>
    </header>
  )
}

export default Header
