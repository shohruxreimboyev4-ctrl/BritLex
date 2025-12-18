import React from 'react'

const ProductCard = ({ product }) => {
  if (!product) return null
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 6 }}>
      <div style={{ width: '100%', height: 120, background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#999' }}>Image</span>
      </div>
      <h3 style={{ marginTop: 8 }}>{product.title || 'Product'}</h3>
      <p style={{ color: '#666' }}>{product.description || 'Short description...'}</p>
      <button style={{ marginTop: 8, padding: '8px 12px' }}>View</button>
    </div>
  )
}

export default ProductCard
