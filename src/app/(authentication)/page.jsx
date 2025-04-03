"use client";

import CardComponent from "@/components/card";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function Home() {
  return (
    <main className=" p-3">
      <div className="flex">
        <div className="w-[20%]">
          <SidebarComponent />
        </div>
        <div className="w-[80%]">
          {/*  for nav bar */}
          <NavbarComponent />
          {/* add card component */}
          <div className=" mt-10 h-[50vh]">
            <div className="grid grid-cols-3 gap-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
