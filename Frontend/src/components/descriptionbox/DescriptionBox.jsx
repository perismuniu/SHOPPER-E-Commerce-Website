const DescriptionBox = () => {
  return (
    <div className="my-[120px] mx-[170px]">
        <div className="flex">
            <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[2px] border-solid border-gray-300 ">Description</div>
            <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[2px] border-solid border-gray-300 ">Reviews (122)</div>
        </div>
        <div className="flex flex-col gap-[25px] border-[2px] border-solid border-gray-300 p-[48px] pb-[70px]">
            <p>An e-commerce website is a platform that allows businesses to sell products or services online. 
               It serves as a digital storefront where customers can browse through items, make selections, and
               purchase products or services directly over the internet.
            </p>
            <p>E-commerce websites have revolutionized shopping by providing a convenient, 24/7 accessible platform
                where consumers can purchase goods and services from the comfort of their homes.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
