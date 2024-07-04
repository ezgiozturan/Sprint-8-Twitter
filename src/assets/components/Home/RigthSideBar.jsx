import "./RigthSideBar.css";

const trends = [
  { id: 1, trend: "#TechTuesday" },
  { id: 2, trend: "#PetFashionShow" },
  { id: 3, trend: "#FoodieFridays" },
  { id: 4, trend: "#TravelThrowback" },
  { id: 5, trend: "#WellnessWednesday" },
  { id: 6, trend: "#DIYDecor" },
  { id: 7, trend: "#MovieMarathon" },
  { id: 8, trend: "#MusicMonday" },
  { id: 9, trend: "#EcoFriendlyTips" },
  { id: 10, trend: "#ArtAttack" },
];

export default function RigthSideBar() {
  return (
    <div className="trends">
      <div>
        <input type="text" placeholder="Ara..." value="" />
        <button type="submit" className="search-btn">
          Ara
        </button>
      </div>
      <h3>Trendler</h3>

      {trends.map((trend) => (
        <div key={trend.id}>
          <p>{trend.trend}</p>
        </div>
      ))}
    </div>
  );
}
