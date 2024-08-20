const DescriptionBox = () => {
  return (
    <div className="my-[50px] md:my-[80px] lg:my-[120px] mx-[20px] md:mx-[80px] lg:mx-[170px] ml-16">
      <div className="flex">
        <div className="flex items-center justify-center text-sm md:text-base lg:text-lg font-semibold w-[120px] md:w-[150px] lg:w-[171px] h-[50px] md:h-[60px] lg:h-[70px] border-2 border-solid border-gray-300">
          Description
        </div>
        <div className="flex items-center justify-center text-sm md:text-base lg:text-lg font-semibold w-[120px] md:w-[150px] lg:w-[171px] h-[50px] md:h-[60px] lg:h-[70px] border-2 border-solid border-gray-300">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-[25px] border-2 border-solid border-gray-300 p-4 md:p-8 lg:p-[48px] pb-[50px] md:pb-[60px] lg:pb-[70px] text-sm md:text-base lg:text-lg">
        <p>
          An e-commerce website is a platform that allows businesses to sell products or services online. It serves as a digital storefront where customers can browse through items, make selections, and purchase products or services directly over the internet.
        </p>
        <p>
          E-commerce websites have revolutionized shopping by providing a convenient, 24/7 accessible platform where consumers can purchase goods and services from the comfort of their homes.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;