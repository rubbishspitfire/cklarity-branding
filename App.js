const { useState } = React;

function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will elevate your brand soon 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <header>
        <div className="logo">CKLARITY</div>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Consult</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Elevate Your Brand</h1>
          <p>
            Strategic branding, marketing consulting, and tailored business guidance
            designed to help small businesses stand out and dominate their market.
          </p>
          <button className="btn" onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }>
            Get Free Consultation
          </button>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Who We Are</h2>
        <p>
          We specialize in elevating business identities through strategic branding,
          effective marketing, and market analysis. Our goal is to provide affordable,
          high-impact solutions tailored specifically to small businesses.
        </p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Brand Strategy</h3>
            <p>Build a powerful identity aligned with your audience and vision.</p>
          </div>
          <div className="service-card">
            <h3>Web Design</h3>
            <p>Modern, responsive websites that convert visitors into customers.</p>
          </div>
          <div className="service-card">
            <h3>Marketing Consulting</h3>
            <p>Actionable strategies to grow visibility and customer engagement.</p>
          </div>
          <div className="service-card">
            <h3>Market Analysis</h3>
            <p>Understand your audience and position your brand effectively.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Book a Consultation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your business..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="btn">Submit</button>
        </form>
      </section>

      <footer>
        <p>© 2026 CKLARITY | Elevate Your Brand</p>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);