import React from "react";
import Header from "../organisms/Header.organism";
import Footer from "../organisms/Footer.organism";

function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-brand-bg dark:bg-neutral-900 transition-colors duration-200">
      <Header />
      <main className="max-w-[1800px] mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}

export default PageContainer;
