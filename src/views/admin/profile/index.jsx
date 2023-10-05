import { useEffect } from "react";
import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import Subscriptions from "./components/subscriptions";

const ProfileOverview = () => {

    return (
        <div className="flex w-full flex-col gap-5">
            <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-2">
                <div className="col-span-1 lg:!mb-0">
                    <Banner />
                </div>

                <div className="col-span-1 lg:!mb-0">
                    <Storage />
                </div>
                {/* <h1>Plans and Subscriptions</h1> */}


                {/* <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div> */}
            </div>
            <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold mt-10 pl-2">

                Plans and Subscriptions

            </p>
            <div>
                <Subscriptions />
            </div>


            {/* <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>

        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div> */}
        </div>
    );
};

export default ProfileOverview;
