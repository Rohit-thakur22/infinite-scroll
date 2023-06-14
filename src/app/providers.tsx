"use client";
import React from "react";
import { store } from "@/store/Store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      
    </Provider>
  );
};

export default Providers;
