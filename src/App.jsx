// 1. Core React and routing imports
import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'

// --- SHARED UI COMPONENTS ---

// 2. SVG Icon component for checkmarks (used in pricing lists)
const CheckIcon = ({ color = 'currentColor' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

// 3. SVG Icon component for stars (used in ratings/reviews)
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#c5ff00">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

// 4. Component to handle window scroll behavior when changing routes
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Track current URL path
  useEffect(() => {
    // Scroll to the very top smoothly whenever the path changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// 5. Main Navigation Bar component
const Navbar = ({ scrolled }) => {
  const { pathname } = useLocation(); // Get current page path for styling links
  // Determine if we are on a page that requires a dark header style
  const isDarkPage = pathname === '/pricing' || pathname === '/book' || pathname === '/confirmation';

  return (
    <nav className={scrolled || isDarkPage ? 'scrolled' : ''} style={{
      position: 'fixed',
      background: (scrolled || isDarkPage) ? 'white' : 'transparent',
      borderBottom: (scrolled || isDarkPage) ? '1px solid #eee' : 'none',
      transition: 'all 0.3s ease'
    }}>

      <div className="container nav-content">
        {/* Brand Logo Link */}
        <Link to="/" className="logo" style={{ color: (scrolled || isDarkPage) ? '#024f96ff' : 'white' }}>AquaPure</Link>

        {/* Navigation Links List */}
        <div className="nav-links">
          {/* Active links are highlighted with a bolder font weight (700) */}
          <Link to="/" style={{ color: (scrolled || isDarkPage) ? '#64748b' : 'rgba(255,255,255,0.7)', fontWeight: pathname === '/' ? '700' : '500' }}>Services</Link>
          <Link to="/locations" style={{ color: (scrolled || isDarkPage) ? '#64748b' : 'rgba(255,255,255,0.7)', fontWeight: pathname === '/locations' ? '700' : '500' }}>Locations</Link>
          <Link to="/pricing" style={{ color: (scrolled || isDarkPage) ? '#64748b' : 'rgba(255,255,255,0.7)', fontWeight: pathname === '/pricing' ? '700' : '500' }}>Memberships</Link>
          <a href="#footer" onClick={(e) => { e.preventDefault(); document.querySelector('.ap-footer')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: (scrolled || isDarkPage) ? '#64748b' : 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>Support</a>
          <Link to="/contact" style={{ color: (scrolled || isDarkPage) ? '#64748b' : 'rgba(255,255,255,0.7)', fontWeight: pathname === '/contact' ? '700' : '500' }}>Contact Us</Link>
        </div>

        {/* Action Buttons (Sign In. Book Now) */}
        <div className="nav-actions">
          <Link to="/signin" style={{ color: (scrolled || isDarkPage) ? '#3c5ba2ff' : 'white', textDecoration: 'none' }}>Sign In</Link>
          <Link to="/book" className={`btn ${(scrolled || isDarkPage) ? 'btn-navy' : 'btn-outline-white'}`}>Book Now</Link>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => (
  <footer className="ap-footer">
    <div className="container">
      <div className="ap-footer-top">
        <div className="ap-footer-brand">
          <div className="logo" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>AquaPure</div>
          <p style={{ maxWidth: '300px', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Elevating automotive care through precision engineering and sustainable purity.
          </p>
          <div className="ap-footer-socials" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem', cursor: 'pointer' }}>𝕏</span>
            <span style={{ fontSize: '1.25rem', cursor: 'pointer' }}>📸</span>
            <span style={{ fontSize: '1.25rem', cursor: 'pointer' }}>📘</span>
          </div>
        </div>

        <div className="ap-footer-group">
          <h4 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Precision Wash</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Ceramic Coating</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Interior Detailing</a></li>
          </ul>
        </div>

        <div className="ap-footer-group">
          <h4 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/locations" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Locations</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/pricing" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Memberships</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/contact" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Contact Us</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Sustainability</a></li>
          </ul>
        </div>

        <div className="ap-footer-group">
          <h4 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Privacy Policy</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Terms of Service</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid #eee', paddingTop: '2.5rem', marginTop: '4rem', textAlign: 'center' }}>
        <div style={{ color: '#64748b', fontSize: '0.85rem' }}>© 2026 AquaPure Car Care. Precision. Vitality. Purity.</div>
      </div>
    </div>
  </footer>
)

// Page Components
// Main Landing Page Component
const HomePage = () => (
  <>
    {/* HERO SECTION: The visual introduction to the site */}
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="badge">Precision. Vitality. Purity.</div>
          <h1>The Purest Reflection of Your Car.</h1>
          <p>
            Experience a professional-grade clean that treats your vehicle like the investment it is.
            Our eco-friendly precision technology ensures a spotless finish every time.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/book" className="btn btn-primary">Book Your Shine</Link>
            <Link to="/pricing" className="btn btn-outline-white">View Pricing</Link>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <img src="/hero-car.png" alt="Luxury car" className="hero-img" />
    </header>

    {/* INNOVATION SECTION: Showcasing specific technology and values */}
    <section className="section-padding">
      <div className="container">
        <div className="section-title">
          <h2 style={{ fontSize: '1rem', color: '#c5ff00', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Innovation</h2>
          <h2 style={{ fontSize: '3rem' }}>Redefining Car Care</h2>
        </div>

        {/* Features display grid */}
        <div className="features-grid">
          {/* Feature 1: Molecular Purity (Large card spanning 2 columns) */}
          <div className="feature-card card-green" style={{ gridColumn: 'span 2', minHeight: '350px', justifyContent: 'flex-end' }}>
            <img src="/purity.png" className="card-image-bg" style={{ opacity: 0.6 }} alt="droplets" />
            <h3>Molecular Purity</h3>
            <p>Our signature premium soaps lift dirt without compromising your vehicle's finish.</p>
          </div>

          {/* Feature 2: Eco-Hydration (Standard card) */}
          <div className="feature-card card-white" style={{ background: '#f8fafc', gridColumn: 'span 1' }}>
            <div className="feature-icon">💧</div>
            <h3>Eco-Hydration</h3>
            <p>Advanced filtration and recirculation systems. Precision meets sustainability.</p>
          </div>

          {/* Feature 3: Ceramic Guard (Dark card) */}
          <div className="feature-card card-navy" style={{ gridColumn: 'span 1' }}>
            <div className="feature-icon" style={{ background: 'rgba(255,255,255,0.05)', color: '#c5ff00' }}>🛡️</div>
            <h3>Ceramic Guard</h3>
            <p>Every wash includes a micro-layer of hydrophobic protection.</p>
          </div>

          {/* Feature 4: Precision Drying (Landscape card with integrated image) */}
          <div className="feature-card card-white" style={{ gridColumn: 'span 2', flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h3>Precision Drying</h3>
              <p>Heated, high-velocity air nozzles ensure zero water spots.</p>
            </div>
            {/* The image added by user earlier for drying process */}
            <div style={{ width: '350px', height: '200px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src="/drying.png" alt="Drying" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

// Pricing & Memberships Page
const PricingPage = () => {
  // Ensure we start at the top of the page when this route loads
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="section-padding pricing-section" style={{ paddingTop: '10rem' }}>
      <div className="container">
        <div className="section-title">
          <h2>Choose Your Treatment</h2>
          <p>Precision packages for every need.</p>
        </div>

        {/* Pricing Selection Grid */}
        <div className="pricing-grid">
          {/* Package 1: Basic Wash */}
          <div className="pricing-card">
            <div className="price">K80</div>
            <h3>Basic Wash</h3>
            <ul className="pricing-features">
              <li><CheckIcon color="#00b4ff" /> High-Pressure Wash</li>
              <li><CheckIcon color="#00b4ff" /> Wheel & Tire Clean</li>
            </ul>
            <Link to="/book" className="btn btn-outline-dark" style={{ width: '100%' }}>Choose Basic</Link>
          </div>

          {/* Package 2: Interior Cleaning (Highlighted as most popular) */}
          <div className="pricing-card popular">
            <div className="price">K120</div>
            <h3>Interior Cleaning</h3>
            <ul className="pricing-features">
              <li><CheckIcon color="#c5ff00" /> Deep Vacuuming</li>
              <li><CheckIcon color="#c5ff00" /> Leather Conditioning</li>
            </ul>
            <Link to="/book" className="btn btn-primary" style={{ width: '100%' }}>Select Plan</Link>
          </div>

          {/* Package 3: Full Detailing */}
          <div className="pricing-card">
            <div className="price">K350</div>
            <h3>Full Detailing</h3>
            <ul className="pricing-features">
              <li><CheckIcon color="#00b4ff" /> Everything in Interior</li>
              <li><CheckIcon color="#00b4ff" /> Ceramic Shield Wax</li>
            </ul>
            <Link to="/book" className="btn btn-outline-dark" style={{ width: '100%' }}>Choose Detailing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const LocationsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const locations = [
    {
      label: 'FLAGSHIP',
      name: 'Chilenje Hub',
      address: 'Chilenje, Lusaka',
      status: 'Opening soon',
      statusColor: '#16a34a',
      subtext: 'Closes 8:00 PM',
      distance: '1.2 KM'
    },
    {
      label: '',
      name: 'Kafue Purity',
      address: 'Kafue Road, Lusaka',
      status: 'Open Now',
      statusColor: '#16a34a',
      subtext: 'Closes 9:00 PM',
      distance: '3.8 KM'
    },
    {
      label: '',
      name: 'Inkanga Elite',
      address: 'Leopards Hill Road, Lusaka',
      status: 'Opening Soon',
      statusColor: '#dc2626',
      subtext: 'Starts at 8:00 AM',
      distance: '5.5 KM'
    }
  ]

  return (
    <section className="locations-page section-padding">
      <div className="container">
        <div className="locations-header">
          <div>
            <p className="eyebrow" style={{ color: '#003b72ff' }}>Nearby Locations</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Find the closest precision car care center to you.</h1>
          </div>
          <div className="search-field" style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
            <input type="text" placeholder="Enter Zip Code or City" style={{ paddingLeft: '3rem', background: '#f1f5f9', border: 'none' }} />
          </div>
        </div>

        <div className="locations-grid">
          <div className="map-panel">
            <div className="map-card">
              <div className="map-overlay" style={{ background: 'url(/map.png) center/cover no-repeat' }}>
                <div className="map-pin pin-top" style={{ top: '35%', left: '48%' }} />
                <div className="map-pin pin-left" style={{ top: '55%', left: '32%' }} />
                <div className="map-pin pin-right" style={{ top: '65%', left: '62%' }} />
                <div className="map-pin" style={{ top: '25%', left: '38%' }} />
              </div>
              <div className="map-footer">
                <span className="map-label">AquaPure</span>
                <span className="map-distance">Precision Network</span>
              </div>
            </div>
          </div>

          <div className="location-list">
            {locations.map((location) => (
              <div key={location.name} className="location-card">
                <div className="location-card-header">
                  {location.label ? <span className="location-pill">{location.label}</span> : <div />}
                  <span className="location-distance" style={{ color: '#64748b', fontWeight: 600 }}>{location.distance}</span>
                </div>
                <h3>{location.name}</h3>
                <p className="location-address"><span></span> {location.address}</p>
                <div className="location-meta">
                  <span className="location-status" style={{ color: location.statusColor }}><span>🕒</span> {location.status}</span>
                  <span className="location-subtext">• {location.subtext}</span>
                </div>
                <div className="location-actions" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to="/book" className="btn btn-outline-dark" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderColor: '#00b4ff', color: '#00b4ff' }}>
                    <span></span> Get Directions
                  </Link>
                  <button className="icon-button" style={{ background: '#001529', color: 'white', padding: '0.75rem', borderRadius: '8px', border: 'none', width: '48px', flexShrink: 0 }}>📅</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Booking Flow: Step-by-step service scheduling
const BookingPage = () => {
  // Local state to track which vehicle type is highlighted
  const [selectedVehicle, setSelectedVehicle] = useState('sedan')

  // Ensure the page starts at the top
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="section-padding booking-section">
      <div className="container">
        <div className="section-title">
          <h1>Precision Booking</h1>
        </div>

        {/* Step Indicator (Visual only in this mockup) */}
        <div className="stepper">
          {['Vehicle', 'Service', 'Schedule', 'Review'].map((label, i) => (
            <div key={i} className={`step ${i === 0 ? 'active' : ''}`}>
              <div className="step-circle">{i + 1}</div>
              <div className="step-label">{label}</div>
            </div>
          ))}
        </div>

        {/* Vehicle Type Selection Grid */}
        <div className="vehicle-grid">
          {[
            { id: 'sedan', name: 'Sedan', icon: '🚗' },
            { id: 'suv', name: 'SUV', icon: '🚙' },
            { id: 'truck', name: 'Truck', icon: '🚚' }
          ].map((v) => (
            <div
              key={v.id}
              className={`vehicle-card ${selectedVehicle === v.id ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle(v.id)}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
              <h3>{v.name}</h3>
            </div>
          ))}
        </div>

        {/* Navigation to next step */}
        <div style={{ textAlign: 'right' }}>
          <Link to="/confirmation" className="btn btn-primary">
            Next Step →
          </Link>
        </div>
      </div>
    </section>
  )
}

// Success State: Displayed after booking is complete
const ConfirmationPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="confirmation-section">
      <div className="container">
        {/* Success Visuals */}
        <div className="check-circle">✓</div>
        <div className="section-title">
          <h1 style={{ fontSize: '3rem' }}>Booking Confirmed!</h1>
          <p>Your precision wash is scheduled. All details have been sent to your inbox.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2rem' }}>
          <div>
            {/* Booking Summary Card */}
            <div className="details-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h3>Appointment Details</h3>
                <span className="badge" style={{ background: '#eefbff', color: '#00b4ff' }}>Confirmed</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {/* Individual detail points */}
                <div className="detail-item">
                  <div className="detail-icon">📅</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>DATE & TIME</div>
                    <div style={{ fontWeight: 700 }}>May 22, 2026</div>
                    <div style={{ fontSize: '0.85rem' }}>00:00 PM EST</div>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📍</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>LOCATION</div>
                    <div style={{ fontWeight: 700 }}>chilenje Hub</div>
                    <div style={{ fontSize: '0.85rem' }}>412 Purity Ave, LSK</div>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">🚿</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>SERVICE</div>
                    <div style={{ fontWeight: 700 }}>Full Detailing</div>
                    <div style={{ fontSize: '0.85rem' }}>Ceramic coating incl.</div>
                  </div>
                </div>
              </div>

              {/* Post-booking options */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                <button className="btn btn-navy" style={{ flex: 1 }}>Add to Calendar</button>
                <button className="btn" style={{ flex: 1, background: '#f1f5f9' }}>Reschedule</button>
              </div>
            </div>

            {/* History Feed */}
            <h3 style={{ margin: '2rem 0' }}>Recent Activity</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div className="activity-card">
                <div className="detail-icon"></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Deluxe Exterior Wash</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>March 12, 2026</span>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', margin: '4px 0' }}>
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                </div>
              </div>
              <div className="activity-card">
                <div className="detail-icon"></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>Interior Deep Clean</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>April 05, 2026</span>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', margin: '4px 0' }}>
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Loyalty and Referrals */}
          <aside>
            <div className="referral-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎁</div>
              <h3>Refer a Friend</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.5rem' }}>Give K10, get K10. Share the purity with your inner circle.</p>
              <div className="referral-box">
                <span>PURE-WASH-2026</span>
                <span>📋</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Share Invite Link</button>
            </div>

            <div className="reward-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span>🏆</span>
                  <strong>Purity Rewards</strong>
                </div>
                <div style={{ fontWeight: 800 }}>7/10</div>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>You're only 3 washes away from a complimentary treatment.</p>
            </div>

            {/* Visual Location Reminder */}
            <div className="reward-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" alt="map" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <strong>Chilenje Hub</strong>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>412 Purity Ave, LUSAKA, LSK 10001</p>
                <a href="#" style={{ color: '#00b4ff', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'block', marginTop: '1rem' }}>Get Directions →</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

// Contact Page Component: Professional communication center
const ContactPage = () => {
  const [status, setStatus] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);

  // Auto-scroll to top when page is loaded
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Sending...');

    // Simulate sending delay
    setTimeout(() => {
      setStatus('Message Sent!');
      setTimeout(() => {
        setStatus('Send Message');
        setIsSending(false);
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '6rem', background: '#f7f9fb' }}>
      <div className="container">
        {/* Header Section */}
        <header style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '3rem', fontWeight: 700, color: '#001e40', marginBottom: '1rem' }}>
            Precision in communication.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', color: '#64748b', maxWidth: '42rem', lineHeight: 1.6 }}>
            We're here to ensure your vehicle receives the treatment it deserves. Reach out with any questions about our specialized water-recycling technology or premium detailing packages.
          </p>
        </header>

        {/* Two-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '4rem' }}>
          {/* Left Column: Form Section */}
          <section style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0, 51, 102, 0.05)', border: '1px solid rgba(0, 180, 255, 0.1)' }}>
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Name</label>
                  <div style={{ position: 'relative' }}>
                    <span className="material-symbols-outlined" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '20px' }}>person</span>
                    <input type="text" placeholder="Name" required style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <span className="material-symbols-outlined" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '20px' }}>mail</span>
                    <input type="email" placeholder="*********@gmail.com" required style={{ width: '100%', padding: '0.75rem 3rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Subject</label>
                <div style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '20px' }}>info</span>
                  <input type="text" placeholder="How can we help?" required style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Message</label>
                <textarea rows="5" placeholder="Tell us more about your inquiry..." required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  background: status === 'Message Sent!' ? '#2dbcfe' : '#c5ff00',
                  color: 'black',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: isSending ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}
              >
                {status}
              </button>
            </form>
          </section>

          {/* Right Column: Info Section */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2rem', color: '#001e40', marginBottom: '2rem' }}>Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#2dbcfe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#001e40' }}>HQ Address</h4>
                    <p style={{ margin: '0.5rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>Plot 45, Shantumbu Road, Lusaka, ZM</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#2dbcfe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#001e40' }}>Phone</h4>
                    <p style={{ margin: '0.5rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>+260 97 123 4567</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#2dbcfe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#001e40' }}>Email</h4>
                    <p style={{ margin: '0.5rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>support@aquapure.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

// SignIn Page Component: Handles user authentication UI and mock logic
const SignInPage = () => {
  const navigate = useNavigate(); // For redirecting after login

  // 1. Component State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // 2. Lifecycle: Scroll to top on load
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 3. Form Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!email || !password) return setError('Please fill in all fields');

    setError('');
    setLoading(true);
    // Simulated API authentication call (1.5s delay)
    setTimeout(() => {
      setLoading(false);
      navigate('/'); // Redirect to Home on success
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    // Simulated Google OAuth delay
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="signin-page" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'white',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* 4. Custom Login Header (Independent navigation) */}
      <header className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 0',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        zIndex: 10
      }}>
        <Link to="/" className="logo" style={{ color: 'white', mixBlendMode: 'difference' }}>AquaPure</Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Services</Link>
          <Link to="/locations" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Locations</Link>
          <Link to="/pricing" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Memberships</Link>
          <div style={{ width: '1px', height: '24px', background: '#eee', margin: '0 0.5rem' }}></div>
          <Link to="#" style={{ color: '#0f172a', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>❓</span> Support
          </Link>
        </div>
      </header>

      <main style={{ display: 'flex', flex: 1 }}>
        {/* 5. Left Brand Panel */}
        <div className="signin-left" style={{
          flex: 1,
          background: 'linear-gradient(rgba(0,21,41,0.5), rgba(0,21,41,0.5)), url(/droplets-blue.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 4rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '440px' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1 }}>Precision. Vitality. Purity.</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
              Experience the future of automotive care with AquaPure's technical excellence and sustainable purity.
            </p>
          </div>

          {/* Aesthetic Circle Shape */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            width: '120px',
            height: '120px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%'
          }}></div>
        </div>

        {/* 6. Right Authentication Panel */}
        <div className="signin-right" style={{ flex: 1, padding: '6rem 4rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#001529', marginBottom: '0.5rem' }}>Welcome Back</h1>

            {/* Conditional Error Display */}
            {error && (
              <div style={{ padding: '0.75rem', background: '#fff1f2', color: '#e11d48', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #fda4af', marginBottom: '1rem' }}>
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>✉️</span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Password</label>
                  <a href="#" style={{ fontSize: '0.75rem', color: '#00b4ff', textDecoration: 'none', fontWeight: 700 }}>Forgot Password?</a>
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none'
                    }}
                  />
                  {/* Password Visibility Toggle Icon */}
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, cursor: 'pointer', userSelect: 'none' }}
                  >
                    {showPassword ? '' : ''}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#c5ff00' }}
                />
                <label htmlFor="remember" style={{ fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' }}>Remember me for 30 days</label>
              </div>

              {/* Login Button with Dynamic Loading State */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  background: loading ? '#e2e8f0' : '#c5ff00',
                  color: 'black',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Authenticating...' : 'Sign In'} <span style={{ fontSize: '1.3rem' }}>{loading ? '⏳' : '→'}</span>
              </button>
            </form>

            <div style={{ margin: '2.5rem 0', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: '#e2e8f0', zIndex: 0 }}></div>
              <span style={{ position: 'relative', background: 'white', padding: '0 1rem', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Or continue with</span>
            </div>

            {/* Social Authentication */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="btn btn-outline-dark"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'white',
                borderColor: '#e2e8f0',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </button>

            <p style={{ marginTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.95rem' }}>
              Don't have an account? <Link to="/book" style={{ color: '#001529', fontWeight: 800, textDecoration: 'none' }}>Sign Up</Link>
            </p>
          </div>
        </div>
      </main>

      {/* 7. Footer Integration */}
      <footer className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 0',
        borderTop: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="logo" style={{ fontSize: '1.2rem' }}>AquaPure</div>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>© 2026 AquaPure Car Care. Precision. Vitality. Purity.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>Terms of Service</a>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>Cookie Settings</a>
          <Link to="/contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  )
}

// MAIN APPLICATION COMPONENT: Orcherstrates the entire platform
function App() {
  // 1. Root State: Track scrolling for navbar effects
  const [scrolled, setScrolled] = useState(false)

  // 2. Initial Setup: Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // Becomes 'true' after 50px of scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Cleanup
  }, [])

  // 3. Routing Data: Get the current location
  const { pathname } = useLocation();
  const isSignInPage = pathname === '/signin';

  return (
    <div className="app">
      {/* 4. Global UX Helpers */}
      <ScrollToTop />

      {/* 5. Conditional Layout Elements */}
      {/* We hide the global navbar and footer on the dedicated sign-in page */}
      {!isSignInPage && <Navbar scrolled={scrolled} />}

      {/* 6. Routing Table: Defines which component to show for each URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {!isSignInPage && <Footer />}
    </div>
  )
}

export default App
