/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { AppDispatch, RootState } from "@/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getRoboData, searchingLogic, sortedArray } from "@/store/robo-list";

const ListData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [limit, setlimit] = useState<number>(10);
  const { data, isLoading, sort, searching } = useSelector(
    (store: RootState) => store.roboSlice
  );

  useEffect(() => {
    dispatch(searchingLogic(searching));
  }, [searching,dispatch]);

  const [roboList, setRoboList] = useState<any>([]);
  useEffect(() => {
    dispatch(sortedArray());
  }, [sort, data, dispatch]);

  useEffect(() => {
    const params = {
      limit,
    };
    dispatch(getRoboData(params));
  }, [limit, dispatch]);

  useEffect(() => {
    setRoboList(data);
  }, [data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setlimit((prev: number) => (prev += 10));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, limit]);

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-4 mt-3 p-4">
        {roboList?.map((item: any) => {
          return (
            <div
              key={item?.id}
              className="min-w-[50px] min-h-[300px] bg-gray-200 p-2 rounded-lg flex flex-col items-center"
            >
              <div className="flex items-center justify-between">
                <h1>
                  Id: <span className="mr-2 font-mono">{item?.id}</span>{" "}
                </h1>
                <p className="flex-1 text-center font-bold text-blue-500">
                  {item?.user?.username}
                </p>
              </div>
              <div>
                <img src={`https://robohash.org/${item.id}.png`} />
              </div>
            </div>
          );
        })}
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default ListData;
