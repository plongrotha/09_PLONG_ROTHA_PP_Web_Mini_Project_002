import { BellPlus, ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function NavbarComponent() {
  return (
    <header className="w-full h-16 bg-white dark:bg-gray-900 shadow-md rounded-md">
      <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 shadow-md">
        <ul className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
          {/* <li>Workspace</li>
          <ChevronRight className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          <li>HRD Design</li> */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/workspace">WorkSpace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/to-doList">HRD Design</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </ul>

        <div className="flex justify-center items-center gap-4">
          <BellPlus className="w-6 h-6 cursor-pointer" color="#94A3B8" />
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              alt="Profile"
              width={40}
              height={40}
              src="https://i.pinimg.com/736x/5b/cf/1b/5bcf1b2636aae39616d08ee72d1b9569.jpg"
            />
            <div>
              <h4 className="font-bold">Plong Rotha</h4>
              <p className="text-light-steel-blue">
                <span>Mrr.rothabetta31@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
