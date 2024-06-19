import { useState } from "react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const [email] = useState("edu@naviotech.dev")
  const [ t ] = useTranslation("global")

  const handleCopy = ()=>{
    navigator.clipboard.writeText(email)
  }
  return (
    <footer className="p-4 flex flex-col justify-center items-center md:px-10 lg:px-20 font-inter dark:bg-dark-default">
      <section className="w-full p-4 py-16 md:px-10 lg:px-20 max-w-screen-2xl flex flex-col justify-center items-center relative dark:bg-dark-default">
        <h2 id="contact" className="text-center font-bold text-2xl mb-6 md:mb-20 md:text-2xl xl:text-3xl dark:text-dark-title">{t("footer.contact")}</h2>
        <a href="#" className="absolute top-[5%] right-0 lg:right-[25%] hover:scale-110">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <rect fill="none" x="0" y="0" width="24" height="24"></rect>
            <path fill="#4B5563" d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
          </svg>
        </a>
        <p className="flex items-center justify-center gap-3 font-extrabold dark:text-dark-title">edu@naviotech.dev 
          <span className="hover:scale-110 transition-all cursor-pointer" onClick={handleCopy}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path  d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </p>
        <nav className="w-full flex justify-center items-center max-w-screen-xl">
          <div className="flex gap-4 mt-6 justify-start items-center">
            <a href="https://github.com/naviotech" target="_blank" className="hover:scale-110 transition-all"><img src="./svg/git.svg"></img></a>
            <a href="https://www.linkedin.com/in/naviomaya" target="_blank" className="hover:scale-110 transition-all"><img src="./svg/linkedin.svg"></img></a>
            <a href="mailto:edu@naviotech.dev" target="_blank" className="hover:scale-110 transition-all"><img src="./svg/mail.svg"></img></a>
          </div>
      </nav>
      </section>
    </footer>
  )
}

export default Footer
