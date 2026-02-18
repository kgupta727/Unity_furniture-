import { useEffect, useState } from 'react'

const products = [
  { name: 'Mono Chair', price: '₹18,500', type: 'Seating', desc: 'Minimal dining chair with steel frame' },
  { name: 'Grid Table', price: '₹45,000', type: 'Table', desc: 'Geometric coffee table in matte black' },
  { name: 'Line Lamp', price: '₹11,800', type: 'Lighting', desc: 'Adjustable LED floor lamp' },
  { name: 'Block Sofa', price: '₹82,000', type: 'Lounge', desc: 'Modular 3-seater with clean lines' },
  { name: 'Arc Shelf', price: '₹26,800', type: 'Storage', desc: 'Wall-mounted floating shelf system' },
  { name: 'Form Stool', price: '₹13,800', type: 'Seating', desc: 'Sculptural accent stool' },
  { name: 'Edge Desk', price: '₹57,000', type: 'Table', desc: 'Minimalist workspace with cable mgmt' },
  { name: 'Loop Mirror', price: '₹15,500', type: 'Decor', desc: 'Circular wall mirror, powder coat' }
]

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <main className="page">
      <header className="topbar">
        <h1>MONO FURNITURE</h1>
        <div className="topbar-actions">
          <a href="https://shop.monofurniture.com" target="_blank" rel="noopener noreferrer" className="shop-link">
            Full Store →
          </a>
          <button onClick={() => setDarkMode((prev) => !prev)} className="mode-btn" aria-label="Toggle theme">
            {darkMode ? 'LIGHT' : 'DARK'}
          </button>
        </div>
      </header>

      <section className="hero">
        <h2 className="hero-title">Essential furniture for modern living</h2>
        <p className="hero-subtitle">Every piece designed with purpose. No excess, only function and form in perfect balance.</p>
        <a href="https://shop.monofurniture.com" target="_blank" rel="noopener noreferrer" className="cta-btn">
          Explore Full Collection
        </a>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Mono</h2>
        <div className="about-content">
          <p>We design furniture that respects both space and time. Every piece is created with precision engineering, sustainable materials, and an unwavering commitment to simplicity.</p>
          <p>Based in Delhi since 2019, we collaborate with independent craftspeople to produce limited collections that challenge disposable design culture.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Top Products</h2>
        <div className="grid">
          {products.map((item) => (
            <article key={item.name} className="card">
              <div className="card-img">
                <div className="img-placeholder-sm">{item.type}</div>
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="desc">{item.desc}</p>
                <p className="price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all">
          <a href="https://shop.monofurniture.com/products" target="_blank" rel="noopener noreferrer" className="outline-btn">
            View All Products
          </a>
        </div>
      </section>

      <section className="features-showcase">
        <h2 className="section-title">Experience Mono</h2>
        <div className="features-grid-large">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Visit Our Showroom</h3>
            <p className="feature-desc">Kirti Nagar Flagship Store</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6789!2d77.1389!3d28.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ba5f0a0a0b%3A0x1234567890!2sKirti%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>
            <p className="feature-address">Kirti Nagar, New Delhi, Delhi 110015</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🥽</div>
            <h3>AR Preview</h3>
            <p className="feature-desc">See furniture in your space before you buy</p>
            <p className="feature-detail">Use your phone camera to visualize any piece in your home. Available on iOS and Android.</p>
            <button className="outline-btn">Try AR View</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>Virtual Showroom</h3>
            <p className="feature-desc">Explore our collection in 3D</p>
            <p className="feature-detail">Take a guided virtual tour of our Copenhagen flagship store from anywhere in the world.</p>
            <button className="outline-btn">Launch Tour</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Design Consultation</h3>
            <p className="feature-desc">Free 30-minute consultation</p>
            <p className="feature-detail">Book a video call with our interior design experts to plan your perfect space.</p>
            <button className="outline-btn">Book Session</button>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-grid">
          <div className="info-item">
            <h4>Free Shipping</h4>
            <p>On all orders over ₹40,000</p>
          </div>
          <div className="info-item">
            <h4>2-Year Warranty</h4>
            <p>Quality craftsmanship guaranteed</p>
          </div>
          <div className="info-item">
            <h4>Carbon Neutral</h4>
            <p>Offset shipping emissions</p>
          </div>
          <div className="info-item">
            <h4>Showroom Hours</h4>
            <p>Mon-Sat: 10AM-6PM</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Mono Furniture. New Delhi, India.</p>
          <p className="footer-note">This is a showcase site. Visit our <a href="https://shop.monofurniture.com" target="_blank" rel="noopener noreferrer">main store</a> for full catalog.</p>
        </div>
      </footer>
    </main>
  )
}