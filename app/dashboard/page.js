import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";



const dashboard = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>

      <div>
        <main className="md:pl-72">
          <div className="mx-auto max-w-5xl px-8 py-24 min-h-screen">
            <div className="input flex gap-4 flex-col items-center">
              <h1 className="text-4xl font-bold text-gray-800">Text to Image</h1>
              <h4 className="text-2xl font-semibold text-gray-800">AI Image Generation</h4>
              <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select " />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="est">option - 1</SelectItem>
          <SelectItem value="cst">option - 2</SelectItem>
          <SelectItem value="mst">option - 3</SelectItem>
          <SelectItem value="pst">option - 4</SelectItem>
          <SelectItem value="hst">option - 5</SelectItem>
        
      </SelectContent>
    </Select>

          <Button variant="outline">Button</Button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default dashboard;
