import React from "react";
import Header from "../organisms/Header.organism";
import Footer from "../organisms/Footer.organism";

function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-brand-bg dark:bg-neutral-900 transition-colors duration-200">
      <Header />
      <main className="max-w-[2300px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageContainer;
