/**
 * LineChart — Multi-series line chart with axes, grid, points and area fills.
 * Pure SVG, no dependencies, theme-friendly.
 *
 * @param {Array<{label: string}>} labels - X-axis labels (periods)
 * @param {Array<{name: string, color: string, values: number[]}>} series
 * @param {string} title
 * @param {string} subtitle
 * @param {string} yUnit
 * @param {number} width
 * @param {number} height
 */
export default function LineChart({
  labels = [],
  series = [],
  title,
  subtitle,
  yUnit = "",
  width = 720,
  height = 360,
}) {
  const padding = { top: 24, right: 24, bottom: 50, left: 56 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const allValues = series.flatMap((s) => s.values);
  const maxValue = Math.max(...allValues, 1);
  const niceMax = Math.ceil(maxValue / 10) * 10 || 10;

  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    Math.round((niceMax / tickCount) * i)
  );

  const stepX = chartW / Math.max(1, labels.length - 1);
  const xAt = (i) => padding.left + i * stepX;
  const yAt = (v) => padding.top + chartH - (v / niceMax) * chartH;

  // Build the path for each series + area
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h3 className="font-display text-2xl font-black uppercase leading-tight text-navy-900 sm:text-3xl">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-navy-600 sm:text-base">{subtitle}</p>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-full"
          role="img"
          aria-label={title || "Line chart"}>
          {/* Y-axis grid + labels */}
          {ticks.map((tick, i) => {
            const y = padding.top + chartH - (tick / niceMax) * chartH;
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  x2={padding.left + chartW}
                  y1={y}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth={1}
                  strokeDasharray={i === 0 ? "0" : "3 3"}
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  fontSize={11}
                  fill="#64748b"
                  textAnchor="end">
                  {tick}
                  {yUnit}
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {labels.map((lab, i) => (
            <text
              key={i}
              x={xAt(i)}
              y={padding.top + chartH + 22}
              fontSize={11}
              fontWeight={600}
              fill="#475569"
              textAnchor="middle">
              {lab}
            </text>
          ))}

          {/* Series paths */}
          {series.map((s, si) => {
            const linePath = s.values
              .map((v, i) => `${i === 0 ? "M" : "L"} ${xAt(i)} ${yAt(v)}`)
              .join(" ");
            const areaPath =
              `${linePath} L ${xAt(s.values.length - 1)} ${padding.top + chartH} L ${xAt(0)} ${padding.top + chartH} Z`;
            return (
              <g key={si}>
                {/* Area fill */}
                <path
                  d={areaPath}
                  fill={s.color}
                  opacity={0.12}
                  className="transition-opacity duration-300"
                />
                {/* Line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                />
                {/* Points + values */}
                {s.values.map((v, i) => (
                  <g key={i}>
                    <circle
                      cx={xAt(i)}
                      cy={yAt(v)}
                      r={5}
                      fill="white"
                      stroke={s.color}
                      strokeWidth={2.5}
                      className="transition-all duration-300 hover:r-7"
                    />
                    <text
                      x={xAt(i)}
                      y={yAt(v) - 12}
                      fontSize={10}
                      fontWeight={700}
                      fill={s.color}
                      textAnchor="middle">
                      {v}
                      {yUnit}
                    </text>
                  </g>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      {series.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {series.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-1 w-6 shrink-0 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-sm font-semibold text-navy-900">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
