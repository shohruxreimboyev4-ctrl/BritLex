import React from "react";

const Footer = () => (
  <footer style={{ borderTop: "1px solid #eee", padding: 20, marginTop: 60 }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <strong style={{ fontSize: 18 }}>Britlex</strong>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <a href="#" style={{ color: '#8b8b8b' }}>Terms and Conditions</a>
        <span style={{ color: '#8b8b8b' }}>•</span>
        <a href="#" style={{ color: '#8b8b8b' }}>Privacy Policy</a>
        <span style={{ color: '#8b8b8b' }}>•</span>
        <a href="#" style={{ color: '#8b8b8b' }}>Cookie Policy</a>
      </div>
    </div>
  </footer>
)

export default Footer
