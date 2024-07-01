// eslint-disable-next-line react/prop-types
const Cart = ({ img,title, description,urlGit, urlWeb, tecnologias }) => {
  return (
    <article className=" overflow-hidden shadow-xl shadow-slate-600 dark:border-stone-700 dark:border-2 dark:rounded-xl	rounded-b-xl">
    <div className="flex flex-col h-full">
      <header className=" group border-black bg-gray-100 dark:bg-dark-default p-6 rounded-t-xl md:min-h-[200px] xl:min-h-[200px] xl:max-h-[200px] overflow-hidden ">
          <figure className="group-hover:scale-125 transition-all duration-500"><img src={img} className="w-[140%] rounded-xl object-contain aspect-video"></img></figure>
      </header>
      <main className="p-8 flex flex-col h-full justify-between gap-3">
        <article>
          <h1 className="text-2xl mb-4 dark:text-dark-title">{title}</h1>
          <p className="text-gray-600 dark:text-dark-subtitle mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tecnologias.map(item =>(
              <p key={item} className="text-gray-600 dark:text-black bg-gray-200 py-1 px-2 rounded-xl">
                {item}
              </p>
            ))}
          </div>
        </article>
        
        
        <div className="flex justify-center items-center gap-2">
          <a href={urlGit} target="_blank" className="hover:scale-125 transition-all cursor-pointer"><img src="./svg/git.svg"></img></a>
          <a href={urlWeb} target="_blank" className="hover:scale-125 transition-all cursor-pointer"><img src="./svg/link.svg"></img></a>
        </div>
      </main>
    </div>
      
    </article>
  )
}

export default Cart
