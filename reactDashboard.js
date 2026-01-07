function Dashboard() {
  const [details, setDetails] = React.useState("Click on a service to view details.");

  const services = {
    "Water Supply": "Water supplied daily from 6 AM to 9 AM.",
    "Healthcare": "Primary Health Centre open 9 AM to 5 PM.",
    "Transport": "Bus service every 30 minutes.",
    "Agriculture": "Seed distribution and soil testing available."
  };

  return (
    <div>
      <header>
        <h1>Village Services Dashboard</h1>
        <p>Connecting villagers to essential services</p>
      </header>

      <div className="cards">
        {Object.keys(services).map((service) => (
          <div
            className="card"
            key={service}
            onClick={() => setDetails(services[service])}
          >
            <h3>{service}</h3>
          </div>
        ))}
      </div>

      <div className="card" style={{ margin: "20px" }}>
        <h3>Service Details</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Dashboard />);
