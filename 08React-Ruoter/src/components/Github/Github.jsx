import { useEffect, useState } from 'react';

function Github() {
     
    const [data, setData] = useState([])
     useEffect(() => {
   
          fetch('https://api.github.com/users/harshad00')
          .then(res => res.json())
          .then(data => {
            
            console.log(data);
           setData(data)
      })
     }, [])

  return (
    <div className=' text-center flex-col p-3
     m-4 bg-indigo-400 text-whitel flex justify-center '>
      
       Github followers : {data.followers}
  <div className=' w-full flex justify-center '>      
     <img src={data.avatar_url
} alt=" Git Image" width={300}  className='  hover:scale-105 py-5' />
</div>


    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {

     const res = fetch('https://api.github.com/users/hiteshchodhary')

     return res.json()
}
