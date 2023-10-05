import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";
import { useState } from "react";
import GodEye from "./components/godEye";
import Articleinput from "./components/articleInput";

const Marketplace = () => {
  const [selected, setSelected] = useState(true);

  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div align="center">
      <div className="flex justify-center">
        <div className="relative w-full mt-10 rounded-md h-10 bg-gray-200 dark:bg-navy-700" style={{ maxWidth: 300, height: 50, borderRadius: 25 }}>
          <div className="relative w-full h-full flex items-center">
            <div
              onClick={toggleSelected}
              className="w-full flex justify-center dark:text-gray-400 text-gray-700 cursor-pointer"
            >
              <button>God's Eye</button>
            </div>
            <div
              onClick={toggleSelected}
              className="w-full flex justify-center dark:text-gray-400 text-gray-700 cursor-pointer"
            >
              <button>Article</button>
            </div>
          </div>

          <span
            className={`${selected
              ? "left-1 text-white font-semibold"
              : "left-1/2  text-white"
              } shadow text-sm flex items-center justify-center w-1/2 rounded h-[100%] transition-all duration-150 ease-linear top-[6px] absolute bg-toggle-light dark:bg-toggle-dark`}
            style={{ margin: -6, borderRadius: 25, width: '60%' }}
          >
            {selected ? "God's Eye" : "Article"}
          </span>
        </div>
      </div>
      <div className="w-11/12 border-2 border-gray-700 rounded-lg py-10 mt-8 px-16">
        {selected && <GodEye />}
        {!selected && <Articleinput />}
      </div>
    {/* <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3"> */}
      
    {/* <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2"> */}
        {/* NFt Banner */}
        {/* <Banner />  */}

         {/* NFt Header */} 
        {/* <h1>This is train page</h1> */}
        
        {/* <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending NFTs
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Art
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Music
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Collection
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                <a href=" ">Sports</a>
              </a>
            </li>
          </ul>
        </div> */}

        {/* NFTs trending card */}
        {/* // <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3"> */}
          {/* <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          /> */}
        {/* // </div> */}

        {/* Recenlty Added setion */}
        {/* <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div> */}

        {/* Recently Add NFTs */}
        {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt6}
          />
        </div> */}
       {/* </div> */}

      {/* right side section */}

      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div> */}

        {/* </div> */}
      </div>
  );
};

export default Marketplace;
