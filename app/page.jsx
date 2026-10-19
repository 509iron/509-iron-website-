export default function Home() {
  const categories = [
    "Tractors",
    "Combines",
    "Sprayers",
    "Drills & Seeders",
    "Trucks & Trailers",
    "Other Equipment"
  ];

  return (
    <main style={{
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      color: "#30343a"
    }}>
      <header style={{
        backgroundColor: "#252a30",
        color: "#e5e7eb",
        padding: "25px",
        textAlign: "center"
      }}>
       <img
  src="/509-iron-logo.png"
  alt="509 Iron Official Logo"
  style={{
    width: "340px",
    maxWidth: "90%",
    height: "auto",
    display: "block",
    margin: "0 auto"
  }}
/>
        <p>FARM EQUIPMENT MARKETPLACE</p>
      </header>

      <section style={{
        padding: "70px 20px",
        textAlign: "center",
        backgroundColor: "#383e45",
        color: "white"
      }}>
        <h2 style={{fontSize: "36px"}}>
          BUY & SELL FARM EQUIPMENT
        </h2>

        <p style={{fontSize: "19px"}}>
          Connecting equipment buyers and sellers
          across the Pacific Northwest.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>
          <a href="#equipment" style={{
            padding: "15px 25px",
            backgroundColor: "#c0c7cf",
            color: "#20252b",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
            BUY EQUIPMENT
          </a>

          <a href="#sell" style={{
            padding: "15px 25px",
            border: "2px solid silver",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold"
          }}>
            SELL EQUIPMENT
          </a>
        </div>
      </section>

      <section id="equipment" style={{
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2>Browse Equipment</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "30px auto"
        }}>
          {categories.map((category) => (
            <div key={category} style={{
              padding: "35px 15px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontWeight: "bold"
            }}>
              {category}
            </div>
          ))}
        </div>
      </section>

      <section id="sell" style={{
        backgroundColor: "#e2e5e9",
        padding: "50px 20px",
        textAlign: "center"
      }}>
        <h2>Sell Your Equipment with 509 Iron</h2>

        <p>
          Simple, affordable equipment marketing.
        </p>

        <h3>2% Self-Service Listing</h3>
        <p>
          You list and show your equipment.
        </p>

        <h3>10% Full-Service Listing</h3>
        <p>
          We help photograph, advertise,
          show, and sell your equipment.
        </p>

        <p>
          Seller submissions coming soon.
        </p>
      </section>

      <footer style={{
        backgroundColor: "#252a30",
        color: "silver",
        padding: "25px",
        textAlign: "center"
      }}>
        <p>509 IRON</p>
        <p>Pacific Northwest Farm Equipment</p>
        <p>509Iron.com</p>
      </footer>
    </main>
  );
}
