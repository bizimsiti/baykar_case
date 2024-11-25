import { DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col">
        <Link
          className="flex justify-center group border-2 p-4 min-w-[400px] text-darkblue font-bold text-xl rounded hover:border-darkblue hover:transition hover:duration-500 dark:bg-white dark:text-gray-800"
          href={"/dashboard"}
        >
          Click and start to manage <span className="ml-2 inline text-white group-hover:hidden">BUDGET</span>
          <span>
            <DollarSign className="text-sm ml-2 w-[30px] h-[30px] text-darkblue hidden group-hover:inline dark:bg-white dark:text-gray-800" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default page;
