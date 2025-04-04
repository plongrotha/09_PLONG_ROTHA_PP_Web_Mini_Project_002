import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Clock } from "lucide-react";

export default function CardComponent() {
  //  state to manage the deletion of the task
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">HRD Design</h2>

          <Select>
            <SelectTrigger className="w-[40px]"></SelectTrigger>
            <SelectContent className="bg-white w-50 text-black border-3">
              <SelectItem value="action" className="font-bold ">
                Action
              </SelectItem>
              <Dialog>
                <DialogTrigger>
                  <button className="font-medium">Update Task</button>
                </DialogTrigger>
                <DialogContent className="bg-white text-black rounded-lg shadow-lg">
                  <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>
                      <form className="space-y-4">
                        <div>
                          <label
                            htmlFor="taskName"
                            className="block text-sm font-medium"
                          >
                            Task Name
                          </label>
                          <input
                            id="taskName"
                            type="text"
                            placeholder="Enter task name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="taskDescription"
                            className="block text-sm font-medium"
                          >
                            Task Description
                          </label>
                          <textarea
                            id="taskDescription"
                            placeholder="Enter task description"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                          ></textarea>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <br />
              <Dialog>
                <DialogTrigger>
                  <button className="font-medium text-red-500">
                    Delete Task
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white text-black rounded-lg shadow-lg">
                  <DialogHeader>
                    <DialogTitle>Delete Task</DialogTitle>
                    <DialogDescription>
                      <p>You sure want to delete your tast?</p>
                      <div className="flex justify-end mt-4">
                        <button
                          className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
                          onClick={() => setIsDeleted(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </SelectContent>
          </Select>
        </div>

        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          Description
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            DESIGN
          </p>
          <div className={`rounded-full w-8 h-8 bg-watermelon-red`}></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select>
          <SelectTrigger
            className={`w-36 truncate border-watermelon-red text-watermelon-red`}
          >
            <SelectValue placeholder={"NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> Mar 23, 2025
        </p>
      </div>
    </div>
  );
}
