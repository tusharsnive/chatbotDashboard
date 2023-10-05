import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React from "react";
import { BsCloudCheck } from "react-icons/bs";
const Storage = () => {
  return (
    <Card extra={"w-full h-full p-4"}>
      {/* <div className="ml-auto">
        <CardMenu />
      </div> */}
      {/* Your storage */}
      <div className="mb-auto flex flex-col items-center justify-center mt-14">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          <BsCloudCheck />
        </div>
        <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Plan Name
        </h4>
        <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
          The number of responses used
        </p>
      </div>

      {/* Progress bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">20</p>
          <p className="text-sm font-medium text-gray-600">500</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span className="h-full rounded-full bg-brand-500 dark:!bg-white" style={{width: '5%'}} />
        </div>
      </div>
    </Card>
  );
};

export default Storage;
