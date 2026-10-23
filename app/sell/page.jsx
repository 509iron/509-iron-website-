
"use client";

import { useEffect, useState } from "react";

export default function SellEquipment() {
  const [photos, setPhotos] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [submitting, setSubmitting] = useState(false);
const [message, setMessage] = useState("");

  useEffect(() => {
    const urls = photos.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(urls);

    return () => urls.forEach(URL.revokeObjectURL);
  }, [photos]);


  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const form = new FormData(event.currentTarget);

      const listing = {
        category: form.get("category"),
        year: Number(form.get("year")),
        make: form.get("make"),
        model: form.get("model"),
        asking_price: Number(form.get("asking_price")),
        equipment_hours: form.get("equipment_hours")
          ? Number(form.get("equipment_hours"))
          : null,
        location: form.get("location"),
        description: form.get("description"),
        seller_name: form.get("seller_name"),
        seller_email: form.get("seller_email"),
        seller_phone: form.get("seller_phone"),
        status: "pending",
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/equipment_listings`,
        {
          method: "POST",
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(listing),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setMessage("Your listing was submitted for approval!");
      event.target.reset();
      setPhotos([]);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  }
  const field = {
    display: "block",
    width: "100%",
    padding: "12px",
    margin: "6px 0 18px",
    border: "1px solid #bbb",
    borderRadius: "6px",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4f4f4",
      color: "#252a30",
      padding: "30px 15px",
      fontFamily: "Arial, sans-serif"
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

        <p>
          Enter your equipment information and
          upload photos below.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Equipment Category</label>
         <select name="category" required style={field}> 
            <option value="">Select Category</option>
            <option>Tractors</option>
            <option>Combines</option>
            <option>Sprayers</option>
            <option>Drills & Seeders</option>
            <option>Trucks & Trailers</option>
            <option>Other Equipment</option>
          </select>

          <label>Year</label>
          <input name="year" type="number" required
            placeholder="2022" style={field} />

          <label>Make</label>
          <input name="make" required placeholder="John Deere"
            style={field} />

          <label>Model</label>
          <input name="model" required placeholder="8R 370"
            style={field} />

          <label>Asking Price ($)</label>
          <input name="asking_price" type="number" min="1" required
            placeholder="285000" style={field} />

          <label>Equipment Hours</label>
          <input name="equipment_hours" type="number" min="0"
            placeholder="1250" style={field} />

          <label>Equipment Location</label>
          <input name="location" required
            placeholder="City, State" style={field} />

          <label>Equipment Description</label>
          <textarea name="description" required rows="6"
            placeholder="Describe condition, options, and repairs."
            style={field} />

          <h2>Equipment Photos</h2>
          <p>Choose up to 10 photos (5 MB each).</p>

          <input
            name="equipment_photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={(e) => {
              const files = Array.from(
                e.target.files || []
              );

              if (files.length > 10) {
                alert("Please select no more than 10 photos.");
                e.target.value = "";
                return;
              }

              if (files.some(
                (file) => file.size > 5 * 1024 * 1024
              )) {
                alert("Each photo must be 5 MB or less.");
                e.target.value = "";
                return;
              }

              setPhotos(files);
            }}
            style={field}
          />

          <div style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginBottom: "25px"
          }}>
            {previews.map((url, i) => (
              <img
                key={url}
                src={url}
                alt={`Equipment photo ${i + 1}`}
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
          <input name="seller_name" required style={field} />

          <label>Email Address</label>
          <input name="seller_email" type="email" required style={field} />

          <label>Phone Number</label>
          <input name="seller_phone" type="tel" required style={field} />

          <button type="submit" disabled={submitting}
            style={{
              width: "100%",
             background: submitting ? "#888" : "#252a30", 
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "16px",
              fontSize: "17px"
            }}
          >
            {submitting ? "Submitting..." : "Submit Listing"}
          </button>

          {message && (
  <p style={{
    fontSize: "15px",
    color: message.includes("submitted") ? "green" : "red",
    marginTop: "15px"
  }}>
    {message}
  </p>
)}

<p style={{ fontSize: "13px", color: "#666" }}>
  Equipment information will be submitted for approval.
  Photo uploads are not yet saved.
</p>
        </form>
      </div>
    </main>
  );
}
