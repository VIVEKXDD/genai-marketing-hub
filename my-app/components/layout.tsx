"use client";

import { Header } from "./ui/header";

export function Layout({ children }: { children: React.ReactNode }) {  
  return (
    <div className="min-h-screen w-screen bg-[#100425] relative">
      {/* Radial Gradient Circle */}
      <div 
        className="absolute right-1/6 top-1/2 -translate-y-1/2 w-[70%] h-[80%]" 
        style={{
          background: "radial-gradient(circle, #DC00D3 20%,rgb(136, 120, 255) 50%,rgb(120, 230, 255) 100%, transparent 75%)",
          backgroundSize: "300% 300%", 
          filter: "blur(150px)"
        }}
      ></div>

      {/* Main Content Wrapper - Ensures Background Stays Consistent */}
      <div className="flex flex-col min-h-screen">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-8">
            <Header />
          </div>
        </nav>
        {/* Add margin below the header */}
        <main className="flex-grow mt-8">{children}</main> {/* Added mt-8 to add margin */}
      </div>
    </div>
  );
}
