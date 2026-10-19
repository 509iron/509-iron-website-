
const equipment = {
  title: "2022 John Deere 8R 370 Tractor",
  price: "$285,000",
  year: "2022",
  make: "John Deere",
  model: "8R 370",
  hours: "1,250",
  horsepower: "370 HP",
  location: "Eastern Washington",
  condition: "Used",
};

export default function EquipmentPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        color: "#30343a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "#252a30",
          textAlign: "center",
          padding: "25px 20px",
        }}
      >
        <a href="/" style={{ display: "inline-block" }}>
          <img
            src="/509-iron-logo.png"
            alt="509 Iron Logo"
            style={{
              width: "280px",
              maxWidth: "90%",
              height: "auto",
            }}
          />
        </a>
        <p style={{ color: "#ddd", fontSize: "14px" }}>
          FARM EQUIPMENT MARKETPLACE
        </p>
      </header>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "35px 20px",
        }}
      >
        <a
          href="/"
          style={{
            color: "#30343a",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </a>

        <h1 style={{ marginTop: "30px" }}>
          Equipment for Sale
        </h1>

        <p>
          Browse quality farm equipment across the
          Pacific Northwest.
        </p>

        <article
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #ddd",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#e3e6e9",
              minHeight: "240px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <div>
              <div style={{ fontSize: "60px" }}>🚜</div>
              <p>Equipment Photo Coming Soon</p>
            </div>
          </div>

          <div style={{ padding: "25px" }}>
            <p
              style={{
                color: "#9a6200",
                fontWeight: "bold",
              }}
            >
              DEMO LISTING — NOT FOR SALE
            </p>

            <h2>{equipment.title}</h2>

            <h2
              style={{
                fontSize: "30px",
                color: "#252a30",
              }}
            >
              {equipment.price}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "15px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              <p><strong>Year:</strong> {equipment.year}</p>
              <p><strong>Make:</strong> {equipment.make}</p>
              <p><strong>Model:</strong> {equipment.model}</p>
              <p><strong>Hours:</strong> {equipment.hours}</p>
              <p><strong>Horsepower:</strong> {equipment.horsepower}</p>
              <p><strong>Condition:</strong> {equipment.condition}</p>
              <p><strong>Location:</strong> {equipment.location}</p>
            </div>

            <h3>Equipment Description</h3>

            <p style={{ lineHeight: "1.7" }}>
              Sample John Deere tractor listing featuring
              four-wheel drive, enclosed cab, GPS guidance,
              and front weights. This is a demonstration
              listing created to test the 509 Iron website.
              The price, hours, and specifications are
              placeholders.
            </p>

            <div
              style={{
                backgroundColor: "#f0f1f2",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "25px",
              }}
            >
              <h3>Interested in This Equipment?</h3>
              <p>
                Buyer inquiries and seller contact
                information will be available when
                real listings are added.
              </p>

              <button
                disabled
                style={{
                  backgroundColor: "#252a30",
                  color: "white",
                  border: "none",
                  padding: "14px 25px",
                  borderRadius: "6px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                Contact Seller — Coming Soon
              </button>
            </div>
          </div>
        </article>
      </section>

      <footer
        style={{
          backgroundColor: "#252a30",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <p>509 IRON</p>
        <p>Real Equipment. Real Farmers.</p>
        <p>www.509iron.com</p>
      </footer>
    </main>
  );
}

