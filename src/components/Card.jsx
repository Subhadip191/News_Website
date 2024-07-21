
const Card = ({title, author, description, imgUrl, source, date, url}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg py-8 mx-12 justify-center items-center w-full">
            
            <img className="w-full" src={imgUrl} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                {description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{date.slice(0,10)}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{source}</span>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-normal py-1 px-4 hover:bg-black rounded">
      <a href={url} target="__blank">Visit article</a>
</button>
            </div>
</div>
  )
}
export default Card;
