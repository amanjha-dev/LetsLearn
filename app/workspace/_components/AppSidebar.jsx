"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Compass,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle2Icon,
  WalletCards,
  Book,
} from "lucide-react";
import { usePathname } from "next/navigation";

const SidebarOptions = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/#" },
  { title: "My Learning", icon: Book, path: "/workspace/my-courses" },
  { title: "Explore Courses", icon: Compass, path: "/workspace/explore" },
  { title: "AI Tools", icon: PencilRulerIcon, path: "/workspace/ai-tools" },
  { title: "Billing", icon: WalletCards, path: "/workspace/billing" },
  { title: "Profile", icon: UserCircle2Icon, path: "/workspace/profile" },
];

function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar className="bg-black text-white w-64 min-h-screen border-r border-zinc-800 shadow-lg">
      {/* Header with dark background for logo */}
      <SidebarHeader className="bg-zinc-900 p-5 flex justify-center items-center">
        <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={80}
            className="object-contain invert brightness-0"
        />

      </SidebarHeader>

      {/* Sidebar Main Content */}
      <SidebarContent className="p-4">
        {/* Create Course Button */}
        <SidebarGroup className="mb-6">
          <Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700 text-sm font-semibold py-2 rounded-lg">
            + Create New Course
          </Button>
        </SidebarGroup>

        {/* Menu Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarOptions.map((item, index) => {
                const isActive = path.includes(item.path);
                return (
                  <SidebarMenuItem key={index} className="mb-2">
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-white text-black font-semibold"
                            : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-zinc-800 p-4 text-center text-xs text-zinc-500">
        © 2025 LetsLearn
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
