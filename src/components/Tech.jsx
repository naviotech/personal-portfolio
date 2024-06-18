
// eslint-disable-next-line react/prop-types
const Tech = ({img,title}) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <img src={img} className="w-12 h-12"></img>
      <h3 className="text-gray-600 dark:text-dark-subtitle font-bold mt-2 ">{title}</h3>
    </article>
  )
}

export default Tech
