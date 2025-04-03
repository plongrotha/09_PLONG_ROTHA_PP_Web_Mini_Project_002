import React from "react";
import Link from "next/link";
import { Star, Ellipsis, SquarePlus, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

export default function SidebarComponent() {
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
        <ul className="space-y-4 font-medium">
          <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/hrd-design" className="flex items-center space-x-3">
              <span className="text-[#94A3B8] font-medium text-2xl dark:text-gray-300">
                Workspace
              </span>
            </Link>
            <Dialog>
              <DialogTrigger>
                {" "}
                <Button className="cursor-pointer">
                  <SquarePlus className="w-10 h-10" color="#94A3B8" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white text-black rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="font-medium mt-4">
                    Create New WorkSpace
                  </DialogTitle>
                  <DialogDescription>
                    <Input />
                    <div className="flex justify-end mt-4">
                      <Button className="bg-[#009990] self-end text-white mt-4 rounded-lg px-4 py-2">
                        Create
                      </Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
        <ul className="space-y-4 font-medium">
          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/hrd-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-watermelon-red`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                HRD Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>

          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link
              href="/website-design"
              className="flex items-center space-x-3"
            >
              <div className={`rounded-full w-3 h-3 bg-blue-500`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Website Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>

          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/mobile-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-green-800`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Mobile Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>

          <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/mobile-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-purple-500`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Spring Boot
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>
        </ul>

        {/* below favorite sizeBar  */}

        <ul className="space-y-4 font-medium mt-[74px] ">
          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/hrd-design" className="flex items-center space-x-3">
              <span className="text-[#94A3B8] font-medium text-2xl dark:text-gray-300">
                Favorite
              </span>
            </Link>
            <Button className=" cursor-pointer">
              <Star color="#94A3B8" />
            </Button>
          </li>
        </ul>
        <ul className="space-y-4 font-medium">
          {/* HRD Design */}
          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/hrd-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-watermelon-red`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                HRD Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>

          {/* Website Design */}
          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link
              href="/website-design"
              className="flex items-center space-x-3"
            >
              <div className={`rounded-full w-3 h-3 bg-blue-500`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Website Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>

          {/* Mobile Design */}
          <li className="flex items-center justify-between  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/mobile-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-green-800`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Mobile Design
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>
          {/* Spring Boot */}
          <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <Link href="/mobile-design" className="flex items-center space-x-3">
              <div className={`rounded-full w-3 h-3 bg-purple-500`}></div>
              <span className="text-gray-700 dark:text-gray-300">
                Spring Boot
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          </li>
        </ul>

        {/*  log out here */}
        <ul className="text-center flex items-center justify-center mt-[74px] ">
          <li className="flex space-x-2">
            <Link
              href="/login"
              className="flex items-center space-x-3 text-[#009990]"
            >
              {/* At login page not yet prevent when user input not thing teacher */}
              <LogOut className="w-6 h-6 cursor-pointer" color="#009990" />
              <span className="text-gray-700 font-bold dark:text-gray-300">
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
