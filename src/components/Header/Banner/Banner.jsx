import logo from './banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="  border border-yellow-400 mt-5">
               <img className='rounded-lg h-[70vh] w-full' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;