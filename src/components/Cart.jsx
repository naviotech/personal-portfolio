// eslint-disable-next-line react/prop-types
const Cart = ({ img,title, description,urlGit, urlWeb, tecnologias }) => {
  return (
    <article className=" overflow-hidden shadow-xl shadow-slate-600 dark:border-stone-700 dark:border-2 dark:rounded-xl	rounded-b-xl">
      <header className="group border-black bg-gray-100 dark:bg-dark-default p-6 rounded-t-xl xl:min-h-[228px] xl:max-h-[228px] overflow-hidden">
        <figure className="group-hover:scale-125 transition-all duration-500"><img src={img} className="w-[100%] rounded-xl xl:object-contain"></img></figure>
      </header>
      <main className="p-8 flex flex-col">
        <h1 className="text-xl mb-4 dark:text-dark-title">{title}</h1>
        <p className="text-gray-600 dark:text-dark-subtitle mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map(item =>(
            <p key={item} className="text-gray-600 dark:text-black bg-gray-200 py-1 px-2 rounded-xl">
              {item}
            </p>
          ))}
        </div>
        
        <div className="flex gap-2 ">
          <a href={urlGit} target="_blank" className="hover:scale-125 transition-all cursor-pointer"><img src="./svg/git.svg"></img></a>
          <a href={urlWeb} target="_blank" className="hover:scale-125 transition-all cursor-pointer"><img src="./svg/link.svg"></img></a>
        </div>
      </main>
    </article>
  )
}

export default Cart
