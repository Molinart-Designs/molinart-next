export function MolinartLoader() {
  return (
    <div className="loader-bg" id="molinart-loader" aria-hidden="true">
      <div className="loader-spinner-wrap">
        <svg viewBox="0 0 100 100" aria-hidden>
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#dabd1d" />
            </filter>
          </defs>
          <circle
            id="spinner"
            style={{
              fill: "transparent",
              stroke: "#dabd1d",
              strokeWidth: 8,
              strokeLinecap: "round",
              filter: "url(#shadow)",
            }}
            cx="50"
            cy="50"
            r="45"
          />
        </svg>
      </div>
    </div>
  );
}
