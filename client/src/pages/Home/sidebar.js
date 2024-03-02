import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm: sm:static'>
       <div className='flex flex-col items-center'>
       <div className='flex flex-col gap-3 sm:flex-row'>
       <a href='/whttps://www.facebook.com/madhu.pgowda.353/'> <i class="ri-facebook-circle-line text-gray-300 text-md"></i></a>
        <a href='mailto:madhukumarap07@gmail.com'><i class="ri-mail-line text-gray-300 text-md"></i></a>
        <a href='https://www.instagram.com/_madhu_p_gowda_/'><i class="ri-instagram-line text-gray-300 text-md"></i></a>
        <a href='https://github.com/madhukumarap?'><i class="ri-github-fill text-gray-300 text-md"></i></a>
        <a href='https://www.linkedin.com/in/madhukumar-a-p-a1835120a/'><i class="ri-linkedin-box-fill text-gray-300 text-md"></i></a>
        <a><i class="ri-whatsapp-line text-gray-300 text-md"></i></a>
        </div>
        <div className='w-[1px] h-52 sm:hidden bg-[#2f8c8f]'>

        </div>
       </div>
    </div>
  )
}

export default Sidebar