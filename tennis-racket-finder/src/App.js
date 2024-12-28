import React, { useState } from "react";
import "./index.css"; // Assuming you have your CSS in App.css
import Logo1 from './images/logo.gif'
import Logo2 from './images/jannik-sinner-sinner.gif'

function App() {
  const [rackets, setRackets] = useState([]);

  // Example array with images
  const racketsData = [
    {
      name: "Racket A",
      description: "A lightweight racket for beginners.",
      price: "$120",
      imageUrl: "/images/racketA.png",
    },
    {
      name: "Racket B",
      description: "Great control for intermediate players.",
      price: "$200",
      imageUrl: "/images/racketB.png",
    },
    {
      name: "Racket C",
      description: "Perfect for all-court professionals.",
      price: "$250",
      imageUrl: "/images/racketC.png",
    },
  ];

  const findRackets = () => {
    // For now, just set the entire array as "recommended"
    setRackets(racketsData);
  };

  return (
    <div>
      {/* HEADER */}
      <header>
        <img src={Logo1} alt="Tennis Logo" className="header-logo" />
        <h1>Tennis Racket Finder</h1>
        <img src={Logo2} alt="Tennis Logo" className="header-logo" />
      </header>

      {/* MAIN CONTENT */}
      <main>
        <div className="questionnaire">
          <h2>Find Your Perfect Racket</h2>
          <form>
            {/* 1. Style of Play */}
            <label>
              What is your primary style of play?
              <select>
                <option value="baseline">Baseline Player</option>
                <option value="serveVolley">Serve and Volley</option>
                <option value="allCourt">All-Court Player</option>
              </select>
            </label>

            {/* 2. Years of Experience */}
            <label>
              How many years have you been playing?
              <select>
                <option value="Beginner">0 - 1</option>
                <option value="Intermediate">2 - 5</option>
                <option value="Advanced">5 - 10</option>
                <option value="Pro">10+</option>
              </select>
            </label>

            {/* 3. Budget */}
            <label>
              What is your budget ($)?
              <select>
                <option value="Low">Under $50</option>
                <option value="Medium">$50 - $150</option>
                <option value="High">$150+</option>
              </select>
            </label>

            {/* 4. Weight Preference */}
            <label>
              Do you prefer a lighter or heavier racket?
              <select>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>
            </label>

            {/* 5. Power vs. Control */}
            <label>
              Do you prefer more power or more control?
              <select>
                <option value="power">Power</option>
                <option value="control">Control</option>
                <option value="balanced">Balanced</option>
              </select>
            </label>

            {/* 6. Brand Loyalty */}
            <label>
              Are you loyal to a specific brand?
              <select>
                <option value="">No Preference</option>
                <option value="Wilson">Wilson</option>
                <option value="Babolat">Babolat</option>
                <option value="Head">Head</option>
                <option value="Prince">Prince</option>
                <option value="Yonex">Yonex</option>
                <option value="Yonex">Other</option>
              </select>
            </label>

            {/* 7. Existing Injuries */}
            {/* <label>
              Do you have any injuries or concerns (e.g., tennis elbow)?
              <input
                type="text"
                placeholder="e.g., shoulder pain, tennis elbow"
              />
            </label> */}

            {/* 8. Frequency of Play */}
            <label>
              How many times per week do you play?
              <select>
                <option value="1-2">1-2 times</option>
                <option value="3-4">3-4 times</option>
                <option value="5+">5 or more times</option>
              </select>
            </label>

            {/* SUBMIT BUTTON */}
            <button type="button" onClick={findRackets}>
              Find Rackets
            </button>
          </form>
        </div>

        {/* RESULTS SECTION */}
        <div className="results">
          <h2>Recommended Rackets</h2>
          {rackets.map((racket, index) => (
            <div key={index} className="racket">
              <div className="racket-header">
                {/* Racket Image */}
                <img
                  src={racket.imageUrl}
                  alt={racket.name}
                  className="racket-image"
                />
                <h3>{racket.name}</h3>
              </div>
              <p>{racket.description}</p>
              <p>
                <strong>{racket.price}</strong>
              </p>
              {/* Example: Star Ratings or Icons */}
              <div className="racket-rating">
                <span>⭐⭐⭐⭐☆</span> {/* or use icons */}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer>&copy; 2024 Tennis Racket Finder</footer>
    </div>
  );
}

export default App;
