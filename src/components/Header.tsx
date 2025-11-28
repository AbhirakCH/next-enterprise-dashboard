"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { MobileSidebar } from "./Sidebar";

export function Header() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center p-4 border-b h-16">
      <MobileSidebar />{" "}
      {/* Mobile Trigger is inside Sidebar component, but we might need to adjust structure if we want it here. 
                      Actually, Sidebar component handles both desktop and mobile trigger. 
                      Let's keep the mobile trigger in Sidebar for now, but usually it's in the header.
                      Wait, my Sidebar implementation has the trigger inside it. 
                      If I place <Sidebar /> here, it will render the trigger button on mobile.
                      But on desktop, <Sidebar /> renders the fixed sidebar. 
                      So I should probably separate the Mobile Trigger or just render Sidebar in Layout and Trigger here.
                      
                      Refactoring plan: 
                      - Sidebar component will export `Sidebar` (desktop) and `MobileSidebar` (trigger + sheet).
                      - But for simplicity, let's assume the Sidebar component handles its own visibility and trigger placement.
                      
                      Actually, looking at my Sidebar code:
                      It renders `SheetTrigger` (mobile button) AND `div` (desktop sidebar).
                      If I put it in Header, the desktop sidebar will be inside Header? No, that's wrong.
                      
                      Correction:
                      Sidebar should be in Layout.
                      Header should contain the Mobile Trigger if it's not part of the Sidebar component.
                      
                      Let's adjust:
                      I will leave Sidebar as is, but I will NOT put it in Header.
                      Header will just have the right-side elements (User, Theme).
                      The Mobile Trigger needs to be somewhere visible on mobile.
                      
                      Let's modify Sidebar to export `MobileSidebarTrigger` separately? 
                      Or just put the trigger in the Header.
                      
                      Let's stick to the plan:
                      Sidebar component handles the sidebar.
                      Header handles the top bar.
                      
                      I'll put a "MobileSidebar" component in the Header?
                      
                      Let's make Header simple for now.
                   */}
      <div className="ml-auto flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
