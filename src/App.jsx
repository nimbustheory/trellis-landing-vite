import { useEffect, useState, useCallback } from 'react'

const CheckIcon = () => (
  <span className="feature-check">
    <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
  </span>
)

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <a href="#" className="nav-logo"><img src="/TRELLIS LOGO.png" alt="Trellis" /></a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how" onClick={closeMenu}>How It Works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#cta" className="nav-cta" onClick={closeMenu}>Get a Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tag">For Independent Wineries</div>
            <h1>Your wine club, <em>in their pocket</em></h1>
            <p className="hero-sub">Give your members the insider experience they signed up for &mdash; benefits, events, early access, and a direct line to your winery. All in a branded app that feels like yours, because it is.</p>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary">
                See It In Action
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#features" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="phone-app">
                  <div className="phone-header">
                    <div className="winery-name">Ridgeline Estate</div>
                    <div className="member-tier">Reserve Club Member</div>
                  </div>
                  <div className="phone-body">
                    <div className="phone-card">
                      <div className="phone-card-label">Your Points</div>
                      <div className="phone-card-value">1,240 <small>/ 1,500 for next reward</small></div>
                    </div>
                    <div className="phone-card">
                      <div className="phone-card-label">Up Next</div>
                      <div className="phone-reward-row">
                        <div className="phone-reward-dot">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B2333" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>
                        </div>
                        <div className="phone-reward-text">
                          <strong>Spring Barrel Tasting</strong>
                          Apr 18 &middot; Members Only
                        </div>
                      </div>
                      <div className="phone-reward-row" style={{ border: 'none' }}>
                        <div className="phone-reward-dot">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7F4E" strokeWidth="2"><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 000 4h4v-4h-4z" /></svg>
                        </div>
                        <div className="phone-reward-text">
                          <strong>Free Tasting Flight</strong>
                          260 pts to unlock
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating notifications */}
            <div className="phone-notif">
              <div className="phone-notif-header">
                <div className="phone-notif-icon">
                  <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
                </div>
                <span className="phone-notif-app">Ridgeline Estate</span>
                <span className="phone-notif-time">now</span>
              </div>
              <div className="phone-notif-body"><strong>New release alert:</strong> Only 48 bottles of our 2022 Reserve Syrah. Tap to claim yours.</div>
            </div>
            <div className="phone-notif phone-notif-2">
              <div className="phone-notif-header">
                <div className="phone-notif-icon">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
                <span className="phone-notif-app">Ridgeline Estate</span>
                <span className="phone-notif-time">2m ago</span>
              </div>
              <div className="phone-notif-body"><strong>You're invited:</strong> Harvest dinner under the stars. RSVP by Friday.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="section-inner">
          <div className="section-tag">The Problem</div>
          <div className="section-title">Your best customers are the hardest to reach</div>
          <p className="section-subtitle">You're competing with every brand on the planet for attention in channels you don't control. Your most loyal fans miss the things that matter most.</p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-stat">~20%</div>
              <div className="problem-label">Email open rate</div>
              <div className="problem-desc">Your new release announcement is sitting unread between a shipping notification and a newsletter from 2019.</div>
            </div>
            <div className="problem-card">
              <div className="problem-stat">~5%</div>
              <div className="problem-label">Social reach</div>
              <div className="problem-desc">The algorithm decides who sees your harvest dinner invite. Most of your followers never will.</div>
            </div>
            <div className="problem-card">
              <div className="problem-stat">0</div>
              <div className="problem-label">Owned channels</div>
              <div className="problem-desc">Email, social, third-party platforms. None of them are yours. You're renting attention on someone else's terms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX: VINEYARD */}
      <div className="parallax-divider" role="presentation" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')" }} />

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-inner">

          {/* Feature 1: Push Notifications */}
          <div className="feature-row">
            <div className="feature-text">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
              </div>
              <div className="feature-title">Instant reach, no middleman</div>
              <div className="feature-desc">Push notifications your members actually see. No algorithms, no spam folders, no hoping they scroll past the right post at the right time.</div>
              <ul className="feature-list">
                <li><CheckIcon />New release dropping Friday? They know instantly.</li>
                <li><CheckIcon />Harvest party next month? They're already RSVPing.</li>
                <li><CheckIcon />Limited allocation for club members? First to hear, first to claim.</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-stack">
                <div className="visual-notif">
                  <div className="visual-notif-icon wine-bg">
                    <svg viewBox="0 0 24 24"><path d="M8 2h8l4 10H4L8 2z" /><path d="M12 12v6" /><path d="M8 22h8" /><path d="M12 18h0" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>New Release Alert</strong>2022 Reserve Syrah. Only 48 bottles. Tap to claim.</div>
                </div>
                <div className="visual-notif">
                  <div className="visual-notif-icon vine-bg">
                    <svg viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>Event Invite</strong>Harvest dinner under the stars. RSVP by Friday.</div>
                </div>
                <div className="visual-notif">
                  <div className="visual-notif-icon gold-bg">
                    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>Reward Unlocked</strong>You've earned a complimentary tasting flight!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Fan Input */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <div className="feature-icon" style={{ background: 'var(--vine)' }}>
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              </div>
              <div className="feature-title">Let your fans shape what's next</div>
              <div className="feature-desc">Polls, product votes, event ideas. Your most loyal customers help decide the next wine club exclusive release or whether the summer concert series should be jazz or bluegrass. They're invested because they're involved.</div>
              <ul className="feature-list">
                <li><CheckIcon />Run polls on upcoming blends and varietals</li>
                <li><CheckIcon />Let members vote on event themes and formats</li>
                <li><CheckIcon />Collect real signal on what your people want</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-stack">
                <div className="visual-poll">
                  <div className="visual-poll-q">What should our next club exclusive release be?</div>
                  <div className="visual-poll-option leading">
                    <span>Grenache Ros&eacute;</span><span style={{ fontWeight: 600, color: 'var(--vine)' }}>47%</span>
                    <div className="bar" style={{ width: '47%' }} />
                  </div>
                  <div className="visual-poll-option">
                    <span>Old Vine Zinfandel</span><span>31%</span>
                    <div className="bar" style={{ width: '31%', background: 'rgba(0,0,0,0.04)' }} />
                  </div>
                  <div className="visual-poll-option">
                    <span>Viognier</span><span>22%</span>
                    <div className="bar" style={{ width: '22%', background: 'rgba(0,0,0,0.04)' }} />
                  </div>
                  <div className="visual-poll-votes">142 members voted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Custom App */}
          <div className="feature-row">
            <div className="feature-text">
              <div className="feature-icon" style={{ background: 'var(--charcoal)' }}>
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <div className="feature-title">Your brand, not ours</div>
              <div className="feature-desc">Every app is custom-built for your winery. Your name, your colors, your identity. Members see you, not a third-party platform. It looks and feels like you built it yourself.</div>
              <ul className="feature-list">
                <li><CheckIcon />Custom colors, fonts, and branding throughout</li>
                <li><CheckIcon />Your winery's name on the home screen</li>
                <li><CheckIcon />No "Powered by" badges competing for attention</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="visual-stack">
                <div className="visual-notif">
                  <div className="visual-notif-icon" style={{ background: 'rgba(91,35,51,0.08)' }}>
                    <svg viewBox="0 0 24 24" stroke="var(--wine)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>100% your brand</strong>Members only see your winery's name and identity. Always.</div>
                </div>
                <div className="visual-notif">
                  <div className="visual-notif-icon vine-bg">
                    <svg viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>Your app, your name</strong>Members see Ridgeline Estate on their phone, not a generic platform.</div>
                </div>
                <div className="visual-notif">
                  <div className="visual-notif-icon gold-bg">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  </div>
                  <div className="visual-notif-text"><strong>Pixel-perfect design</strong>Custom palette, typography, and imagery matched to your estate.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PARALLAX: WINE BARRELS */}
      <div className="parallax-divider" role="presentation" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?w=1920&q=80')" }} />

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-inner">
          <div className="section-tag">How It Works</div>
          <div className="section-title">From first call to live app in days, not months</div>
          <p className="section-subtitle">No six-month implementation. No IT department required. We handle everything.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Tell us about your winery</div>
              <div className="step-desc">A 20-minute call. Your brand, your goals, your club structure. That's all we need to get started.</div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">See your app in 48 hours</div>
              <div className="step-desc">We build a fully branded, interactive demo with your name, your colors, and your wines. No commitment required to see it.</div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Launch with a team behind you</div>
              <div className="step-desc">We handle deployment, onboarding, and stay on as your ongoing tech team. Updates, changes, support &mdash; all included in a simple monthly subscription.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX: GRAPEVINES */}
      <div className="parallax-divider parallax-short" role="presentation" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=1920&q=80')" }} />

      {/* PRICING */}
      <section className="problem" id="pricing" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-tag">Pricing</div>
          <div className="section-title">You don't need a $30K app budget. You need a partner.</div>
          <p className="section-subtitle">Most wineries assume a branded app means a massive upfront investment and months of development. We built Trellis to eliminate that barrier entirely.</p>
          <div className="problem-grid">
            <div className="problem-card" style={{ background: 'var(--white)' }}>
              <div className="problem-stat">$0</div>
              <div className="problem-label">Upfront cost</div>
              <div className="problem-desc">No build fees, no deposit, no surprise invoices. We invest in building your app because we believe in the long-term relationship.</div>
            </div>
            <div className="problem-card" style={{ background: 'var(--white)' }}>
              <div className="problem-stat" style={{ fontSize: '32px' }}>$250&ndash;350</div>
              <div className="problem-label">Per month. That's it.</div>
              <div className="problem-desc">A simple monthly subscription that covers your branded app, hosting, updates, and ongoing support. Less than most wineries spend on a single email marketing tool.</div>
            </div>
            <div className="problem-card" style={{ background: 'var(--white)' }}>
              <div className="problem-stat" style={{ fontSize: '28px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--wine)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              </div>
              <div className="problem-label">We stay on as your team</div>
              <div className="problem-desc">We don't hand you a login and disappear. Need a change, an update, a new feature? We're your in-house tech team, always included.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="section-inner">
          <div className="section-tag">Get Started</div>
          <div className="section-title">See your winery's app before you commit to anything</div>
          <p className="section-subtitle">We'll build a fully branded demo with your name, your wines, and your colors in 48 hours. No contracts, no upfront cost. If you love it, we'll talk next steps.</p>
          <div className="cta-actions">
            <a href="mailto:hello@trellisdigital.co" className="btn-primary">
              Request Your Free Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
          <p className="cta-note">20-minute call. Free demo in 48 hours. No commitment.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand"><img src="/TRELLIS LOGO.png" alt="Trellis" /></div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="mailto:hello@trellisdigital.co">Contact</a>
        </div>
      </footer>
    </>
  )
}
