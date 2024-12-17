import React from "react";
import { Menu, Sidebar } from "lucide-react";
import Button from "../ui/button"; // Correct import for default export
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="block md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 md:hidden">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
