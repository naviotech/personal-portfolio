
// eslint-disable-next-line react/prop-types
const EducationItem = ({type, degree, institution, startDate, endDate }) => {
  return (
    <div className="bg-white dark:bg-dark-default dark:shadow-slate-600 dark:border-stone-700 dark:border-2 dark:rounded-xl  shadow-md rounded-lg p-4 mb-">
      <div className="flex gap-2 items-center mb-2">
        <h3 className="text-xl font-semibold dark:text-dark-title">{institution} </h3>
        <p className="text-gray-500 dark:text-dark-subtitle text-sm">{`(${type})`}</p>
      </div>
      
      <p className="text-base dark:text-dark-title">{degree}</p>
      <p className="text-gray-600 text-sm">{startDate} - {endDate}</p>
    </div>
  );
};

export default EducationItem;
