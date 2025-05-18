import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="justify-items-center min-h-screen p-8">
      {children}
    </main>
  )
  ;
};

export default MainLayout;


