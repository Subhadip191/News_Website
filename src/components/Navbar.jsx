import { Link } from 'react-router-dom'

const Navbar = () => {

  const styles = `
      text-[15px] inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong 
      `;

  return (
    <main>
            <div className='flex gap-8 flex-row content-center items-center text-center justify-center bg-slate-200	 p-11 w-full'>
                <button className={`${styles}`}><Link to='/'>Wired News</Link></button>
                <button className={`${styles}`}><Link to='/bbc-news'>BBC News</Link></button>
                <button className={`${styles}`}><Link to='/business-insider'>Business Insider</Link></button>
                <button className={`${styles}`}><Link to='/the-verge'>The Verge</Link></button>
                <button className={`${styles}`}><Link to='/cnn'>CNN News</Link></button>
            </div>
    </main>
  )
}

export default Navbar