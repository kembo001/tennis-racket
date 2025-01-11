const filterRackets = (rackets, filters) => {
    const {
      playStyle,
      experience,
      budget,
      weightPreference,
      powerControl,
      brand,
    } = filters;
  
    const budgetRanges = {
      Low: [0, 50],
      Medium: [50, 150],
      High: [150, Infinity],
    };
  
    return rackets.filter((racket) => {
  
        const matchesPlayStyle =
        !playStyle ||
        (playStyle === "allCourt" && racket.play_style === "All Court Player") ||
        (playStyle === "baseline" && racket.play_style === "Baseline Player") ||
        (playStyle === "serveVolley" && racket.play_style === "Serve and Volley");
  
      const matchesExperience =
        !experience ||
        (experience === "Beginner" && racket.player_level === "Intermediate") ||
        (experience === "Intermediate" && racket.player_level === "Intermediate") ||
        (experience === "Advanced" && racket.player_level === "Advanced")||
        (experience === "Pro" && racket.player_level === "Advanced");
  
      const matchesBudget =
        !budget ||
        (
          budgetRanges[budget] &&
          racket.price >= budgetRanges[budget][0] &&
          racket.price <= budgetRanges[budget][1]
        );
  
      const matchesWeight =
        !weightPreference ||
        (weightPreference === "light" && racket.weight < 10.5) ||
        (weightPreference === "medium" && racket.weight >= 10.5 && racket.weight <= 11.5) ||
        (weightPreference === "heavy" && racket.weight > 11.5);
  
      const matchesPowerControl =
        !powerControl ||
        (powerControl === "power" && racket.power_level.includes("High")) ||
        (powerControl === "control" && racket.power_level.includes("Low")) ||
        (powerControl === "balanced" && racket.power_level.includes("Medium"));
  
      const matchesBrand = !brand || racket.brand.toLowerCase() === brand.toLowerCase();
  
      return (
        matchesPlayStyle &&
        matchesExperience &&
        matchesBudget &&
        matchesWeight &&
        matchesPowerControl &&
        matchesBrand
      );
    });
  };
  
  export default filterRackets;
  