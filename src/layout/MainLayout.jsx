import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
