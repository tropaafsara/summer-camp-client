import img1 from '../../assets/images/banner/darius-F8E2tks5N04-unsplash (1).jpg';
// import img2 from '../../../assets/images/banner/2.jpg';
// import img3 from '../../../assets/images/banner/3.jpg';
// import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-xl" />
                {/* <img src="https://i.ibb.co/FHfWjfq/im.png" className="w-full rounded-xl" /> */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Harmonize Your Melodies: Join Our Enchanting Music Class!</h2>
                        <p>Unleash your musical potential in our captivating music class! Whether you're a beginner or an experienced musician, our expert instructors will guide you through the fascinating world of melodies, rhythms, and harmonies. Discover the joy of playing an instrument, developing your vocal skills, or exploring the art of composition.</p>
                        <div>
                            <button className="btn btn-ghost  bg-fuchsia-800 hover:bg-purple-800  mt-5 text-white mr-5">Discover More</button>
                             </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-ghost text-white text-3xl mr-5">❮</a>
                    <a href="#slide2" className="btn btn-ghost text-black text-3xl ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Harmonize Your Melodies: Join Our Enchanting Music Class!</h2>
                        <p>Unleash your musical potential in our captivating music class! Whether you're a beginner or an experienced musician, our expert instructors will guide you through the fascinating world of melodies, rhythms, and harmonies. Discover the joy of playing an instrument, developing your vocal skills, or exploring the art of composition.</p>
                        <div>
                            <button className="btn btn-ghost  bg-fuchsia-800 hover:bg-purple-800  mt-5 text-white mr-5">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-ghost text-white text-3xl mr-5">❮</a>
                    <a href="#slide3" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Harmonize Your Melodies: Join Our Enchanting Music Class!</h2>
                        <p>Unleash your musical potential in our captivating music class! Whether you're a beginner or an experienced musician, our expert instructors will guide you through the fascinating world of melodies, rhythms, and harmonies. Discover the joy of playing an instrument, developing your vocal skills, or exploring the art of composition.</p>
                        <div>
                            <button className="btn btn-ghost  bg-fuchsia-800 hover:bg-purple-800  mt-5 text-white mr-5">Discover More</button>
                             </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-ghost text-white text-3xl">❮</a>
                    <a href="#slide4" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Harmonize Your Melodies: Join Our Enchanting Music Class!</h2>
                        <p> Unleash your musical potential in our captivating music class! Whether you're a beginner or an experienced musician, our expert instructors will guide you through the fascinating world of melodies, rhythms, and harmonies. Discover the joy of playing an instrument, developing your vocal skills, or exploring the art of composition.</p>
                        <div>
                            <button className="btn btn-ghost  bg-fuchsia-800 hover:bg-purple-800  mt-5 text-white mr-5">Discover More</button>
                            </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-ghost text-white text-3xl">❮</a>
                    <a href="#slide1" className="btn btn-ghost text-black text-3xl">❯</a>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;