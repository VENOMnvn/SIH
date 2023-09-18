import React from "react";

const [salary,session,rating,description] = [1000,23,4.5,"Lawyer as per your needs"];

// const contentData = [
//   {
//     id: 1,
//     imgSrc: "https://dummyimage.com/720x400",
//     title: "Chichen",
//     session: 26,
//     subtitle: "SUBTITLE",
//     rating:3.9,
//     salary: 500,
//     description:
//       "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
//   },
//   {
//     id: 2,
//     imgSrc: "https://dummyimage.com/721x401",
//     title: "Colosseum",
//     session: 26,
//     subtitle: "SUBTITLE",
//     salary: 500,
//     rating:3.9,
//     description:
//       "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
//   },
//   {
//     id: 3,
//     imgSrc: "https://dummyimage.com/722x402",
//     title: " of Giza",
//     subtitle: "SUBTITLE",
//     session: 26,
//     rating:3.9,
//     salary: 500,
//     description:
//       "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
//   },
//   {
//     id: 4,
//     imgSrc: "https://dummyimage.com/723x403",
//     title: "San ",
//     session: 26,
//     subtitle: "SUBTITLE",
//     rating:3.9,
//     salary: 500,
//     description:
//       "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
//   },
// ];

const ContentCard = (params) => (
    <div className="xl:w-1/4 md:w-1/2 p-4" key={params.user_id?.name}>
      <div className="p-6 rounded-lg flex flex-col justify-between">
        <img
          className="h-40 rounded w-full object-cover object-center mb-3"
          src={"https://tse2.mm.bing.net/th?id=OIP.jUNv1G1kKJbVPlZYBOSsDQAAAA&pid=Api&P=0&h=180"}
          alt="content"
        />
        <div>
          <div className="flex items-center justify-between">
            <div className="text-base font-bold">{ params?.userid?.name[0].toUpperCase() + params?.userid?.name.slice(1) }</div>
            <div className="text-[#414BF4]">{`${session} sessions `}</div>
          </div>
          <div className="text-sm text-[#585858] font-semibold mt-2">
            {description}
          </div>
          <div className="flex items-center mt-2">
            <div className="">{rating}</div>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1 ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <div className="text-sm text-[#585858] font-bold mt-2">
            {`$${salary}/hour`}
          </div>
        </div>
        <div className=" w-full mt-4 flex justify-end">
          <button className="flex  text-white bg-[#414BF4] border-0 py-2 px-2 focus:outline-none rounded text-sm">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
  

const ModalContent = (params) => {
  console.log(params.dataContent?.data?.result);
  const contentData = params.dataContent?.data?.result

  return (
    <section className="text-gray-600 body-font">
      <div className=" px-5  mx-auto">
        <div className="flex flex-wrap w-full mb-5">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Top legal advisors suggested for you
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          { contentData?.length !=0 ? contentData?.map((content) => (
            <ContentCard {...content} key={content.id} />
          ))  : "No Service Provider Found as per demand please search at another request" }
        </div>

        <div className=" w-full mt-10 flex justify-end">
          <div className="flex  text-[#414BF4] font-normal  text-base mr-5">
            Show More
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalContent;
