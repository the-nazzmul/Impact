import img1 from './../../../assets/logo-oracle.png'
import img2 from './../../../assets/logo-tip.png'
import img3 from './../../../assets/logo-cross.png'
import img4 from './../../../assets/Becker_Logo_RGB_BECKER-white.png'

const Sponsors = () => {
    return (
      <div className="dotted-bg text-white">
        <h1 className="text-center text-4xl pt-[86px] mb-12">Sponsored By</h1>
        <div className='flex flex-wrap gap-4 justify-evenly pb-24'>
            <img src={img1} alt="logo" />
            <img src={img2} alt="logo" />
            <img src={img3} alt="logo" />
            <img src={img4} alt="logo" />
        </div>
      </div>
    );
};

export default Sponsors;