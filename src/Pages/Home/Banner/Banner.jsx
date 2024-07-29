
import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 40px'}}>
      <div className='w-1/2 space-y-4'>
      <h2 className='text-3xl md:text-5xl uppercase font-bold'>Donate <span className='text-red-700'>Blood</span> Save Life</h2>
      <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium est, pariatur laboriosam dolores omnis impedit ratione quos cum magni asperiores?</p>
      <div className='flex gap-4'>
        <button className='bg-red-700 py-2 px-6 rounded-lg text-white font-bold'>Join as a Donor</button>
        <button className='bg-white py-2 px-6 rounded-lg text-red-700 font-bold'>Search Donor</button>
      </div>
      </div>
    </div>
  )
};

export default Banner;
