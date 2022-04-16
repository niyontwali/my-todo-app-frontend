import React from 'react';
import Card from './Card';

const Home = () => {
  return ( 
    <div className='flex justify-center h-screen bg-no-repeat bg-cover' style={{backgroundImage:'url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F06%2F21%2FGettyImages-660254169-2000.jpg&q=60")'}}>
      <div className='bg-[#FCF6F6] border-white shadow-sm shadow-white bg-opacity-70 my-[70px] w-screen mx-[300px]'>
        <Card />
      </div>
    </div>
   );
}
 
export default Home;