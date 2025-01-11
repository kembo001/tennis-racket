import React, { useState, useEffect } from "react";
import "./index.css";
import Logo1 from "./images/logo.gif";
import Logo2 from "./images/jannik-sinner-sinner.gif";
import filterRackets from "./filterRackets";

function App() {
  // Keep *both* the entire list and the filtered list
  const [allRackets, setAllRackets] = useState([]);
  const [filteredRackets, setFilteredRackets] = useState([]);

  // Form state
  const [playStyle, setPlayStyle] = useState("");
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState("");
  const [weightPreference, setWeightPreference] = useState("");
  const [powerControl, setPowerControl] = useState("");
  const [brand, setBrand] = useState("");

  // On mount, fetch *all* rackets
  useEffect(() => {
    fetch("http://localhost:8080/rackets")
      .then((res) => res.json())
      .then((data) => {
        setAllRackets(data);     // store the entire list
        setFilteredRackets(data); // initially, show them all or you can default to top 3
      })
      .catch((error) => console.error("Error fetching rackets:", error));
  }, []);

  // Run filters and only show top 3
  const findRackets = () => {
    const filters = {
      playStyle,
      experience,
      budget,
      weightPreference,
      powerControl,
      brand,
    };

    // Filter the *entire* list, not just the already-filtered list
    const filtered = filterRackets(allRackets, filters);

    // Grab first 3
    const topThree = filtered.slice(0, 3);

    // Store in `filteredRackets`
    setFilteredRackets(topThree);
  };

  return (
    <div>
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
              <select
                value={playStyle}
                onChange={(e) => setPlayStyle(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="baseline">Baseline Player</option>
                <option value="serveVolley">Serve and Volley</option>
                <option value="allCourt">All-Court Player</option>
              </select>
            </label>

            {/* 2. Years of Experience */}
            <label>
              How many years have you been playing?
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="Beginner">0 - 1</option>
                <option value="Intermediate">2 - 5</option>
                <option value="Advanced">5 - 10</option>
                <option value="Pro">10+</option>
              </select>
            </label>

            {/* 3. Budget */}
            <label>
              What is your budget ($)?
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="Low">Under $50</option>
                <option value="Medium">$50 - $150</option>
                <option value="High">$150+</option>
              </select>
            </label>

            {/* 4. Weight Preference */}
            <label>
              Do you prefer a lighter or heavier racket?
              <select
                value={weightPreference}
                onChange={(e) => setWeightPreference(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="heavy">Heavy</option>
              </select>
            </label>

            {/* 5. Power vs. Control */}
            <label>
              Do you prefer more power or more control?
              <select
                value={powerControl}
                onChange={(e) => setPowerControl(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="power">Power</option>
                <option value="control">Control</option>
                <option value="balanced">Balanced</option>
              </select>
            </label>

            {/* 6. Brand Loyalty */}
            <label>
              Are you loyal to a specific brand?
              <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">No Preference</option>
                <option value="Wilson">Wilson</option>
                <option value="Babolat">Babolat</option>
                <option value="Head">Head</option>
                <option value="Prince">Prince</option>
                <option value="Yonex">Yonex</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {/* 7. Frequency of Play */}
            <label>
              How many times per week do you play?
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="1-2">1-2 times</option>
                <option value="3-4">3-4 times</option>
                <option value="5+">5 or more times</option>
              </select>
            </label>

            <button type="button" onClick={findRackets}>
              Find Rackets
            </button>
          </form>
        </div>

        {/* RESULTS */}
        <div>
          <h2>Recommended Rackets</h2>
        </div>

        <div className="results">
          {filteredRackets.map((racket) => (
            <div key={racket.id} className="racket">
              <img
                src="/images/racketA.png"
                alt={racket.model}
                className="racket-image"
              />
              <h3>
                {racket.brand} {racket.model}
              </h3>
              <p>Weight: {racket.weight} grams</p>
              <p>Head Size: {racket.head_size} sq. in</p>
              <p>String Pattern: {racket.string_pattern}</p>
              <p>{racket.raiting}</p>
              <p>
                <strong>${racket.price}</strong>
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer>&copy; 2025 Tennis Racket Finder</footer>
    </div>
  );
}

export default App;
