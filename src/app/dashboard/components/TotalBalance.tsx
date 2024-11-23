import React from "react";

type Props = {};

const TotalBalance = (props: Props) => {
  return (
    <section className="border-white border-2 flex flex-col justify-center items-center p-3 font-bold text-lg text-white w-full ">
      <h3 className="">TOTAL BALANCE</h3>
      <div>0</div>
    </section>
  );
};

export default TotalBalance;
