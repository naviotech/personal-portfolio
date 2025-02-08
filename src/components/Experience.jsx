// eslint-disable-next-line react/prop-types
const Experience = ({ role, company, startDate, endDate, description }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-50 dark:bg-dark-default dark:shadow-slate-600 dark:border-stone-700 dark:border-2 dark:rounded-xl mb-">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold dark:text-dark-title">{company} </h3>
      </div>

      <p className="text-base dark:text-dark-title">{role}</p>
      <p className="text-sm text-gray-600">
        {startDate} - {endDate}
      </p>
      <div className="mt-6">
        <p className="dark:text-dark-title">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Experience
