
"use client";

import { useEffect, useState } from "react";

export default function SellEquipment() {
  const [photos, setPhotos] = useState([]);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const urls = photos.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews(urls);

    return () => urls.forEach(URL.revokeObjectURL);
  }, [photos]);

  const fieldStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    marginBottom: "18px",
    border: "1px solid #bbb",
    borderRadius: "6px",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  return (
    <main style={{
      background: "#f4f4f4",
      minHeight: "100vh",
      padding: "30px 15px",
      fontFamily: "Arial, sans-serif",
      color: "#252a30"
    }}>
      <div style={{
        maxWidth: "750px",
        margin: "auto",
        background: "white",
        padding: "25px",
        borderRadius: "10px"
      }}>
        <a href="/">← Back to Home</a>

        <h1>Sell Equipment with 509 Iron</h1>
        <p>Enter your equipment information below.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Equipment Category</label>
          <select required style={fieldStyle}>
            <option value="">Select Category</option>
            <option>Tractors</option>
            <option>Combines</option>
            <option>Sprayers</option>
            <option>Drills & Seeders</option>
            <option>Trucks & Trailers</option>
            <option>Other Equipment</option>
          </select>

          <label>Year</label>
          <input type="number" required
            placeholder="2022" style={fieldStyle} />

          <label>Make</label>
          <input required placeholder="John Deere"
            style={fieldStyle} />

          <label>Model</label>
          <input required placeholder="8R 370"
            style={fieldStyle} />

          <label>Asking Price ($)</label>
          <input type="number" min="1" required
            placeholder="285000" style={fieldStyle} />

          <label>Equipment Hours</label>
          <input type="number" min="0"
            placeholder="1250" style={fieldStyle} />

          <label>Equipment Location</label>
          <input required
            placeholder="City, State"
            style={fieldStyle} />

          <label>Equipment Description</label>
          <textarea required rows="6"
            placeholder="Describe the equipment, condition, options, and any repairs."
            style={fieldStyle} />

          <h2>Equipment Photos</h2>
          <p>Select up to 10 photos.</p>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(e) => {
              const selected = Array.from(
                e.target.files || []
              );
              if (selected.length > 10) {
                alert("Maximum 10 photos.");
                e.target.value = "";
                return;
              }
              if (selected.some(
                (file) => file.size > 5 * 1024 * 1024
              )) {
                alert("Each photo must be 5 MB or less.");
                e.target.value = "";
                return;
              }
              setPhotos(selected);
            }}
            style={fieldStyle}
          />

          <div style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginBottom: "25px"
          }}>
            {previews.map((url, index) => (
              <img
                key={url}
                src={url}
                alt={`Equipment photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "6px"
                }}
              />
            ))}
          </div>

          <h2>Seller Contact Information</h2>

          <label>Seller Name</label>
          <input required style={fieldStyle} />

          <label>Email Address</label>
          <input type="email" required
            style={fieldStyle} />

          <label>Phone Number</label>
          <input type="tel" required
            style={fieldStyle} />

          <button type="button" disabled
            style={{
              width: "100%",
              padding: "16px",
              background: "#aaa",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "17px"
            }}>
            Submit Listing — Coming Soon
          </button>

          <p style={{fontSize: "13px"}}>
            This form currently previews information and
            photos only. Listings are not yet saved or sent.
          </p>
        </form>
      </div>
    </main>
  );
}
