import img1 from './../../../assets/logo-oracle.png'
import img2 from './../../../assets/logo-tip.png'
import img3 from './../../../assets/logo-cross.png'
import img4 from './../../../assets/Becker_Logo_RGB_BECKER-white.png'

const Sponsors = () => {
    return (
      <div className="dotted-bg text-white">
        <h1 className="text-center text-4xl pt-[86px] mb-12">Sponsored By</h1>
        
        {/* logos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-24'>
            <div className='flex items-center justify-center hover:scale-125 duration-300 transition'><img src={img1} alt="logo" /></div>
            <div className='flex items-center justify-center hover:scale-125 duration-300 transition'><img src={img2} alt="logo" /></div>
            <div className='flex items-center justify-center hover:scale-125 duration-300 transition'><img src={img3} alt="logo" /></div>
            <div className='flex items-center justify-center hover:scale-125 duration-300 transition'><img src={img4} alt="logo" /></div>
        </div>
      </div>
    );
};

export default Sponsors;