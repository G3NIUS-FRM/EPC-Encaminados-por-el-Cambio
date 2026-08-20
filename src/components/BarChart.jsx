/**
 * BarChart — Vertical bar chart with optional multiple series, grid, axes, and tooltip.
 * Pure SVG, no dependencies, theme-friendly.
 *
 * @param {Array<{label: string, values: number[], colors: string[]}>} data
 * @param {string} title
 * @param {string} subtitle
 * @param {Array<string>} seriesLabels
 * @param {string} yUnit
 * @param {number} width - chart width in px (default 720)
 * @param {number} height - chart height in px (default 360)
 */
export default function BarChart({
  data,
  title,
  subtitle,
  seriesLabels = [],
  yUnit = "",
  width = 720,
  height = 360,
}) {
  const padding = { top: 24, right: 24, bottom: 56, left: 56 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const allValues = data.flatMap((d) => d.values);
  const maxValue = Math.max(...allValues, 1);
  const niceMax = Math.ceil(maxValue / 10) * 10 || 10;

  // Determine y-axis ticks (5 ticks)
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    Math.round((niceMax / tickCount) * i)
  );

  const groupCount = data.length;
  const seriesCount = data[0]?.values.length || 1;
  const groupWidth = chartW / groupCount;
  const barWidth = Math.max(8, (groupWidth * 0.7) / seriesCount);
  const groupPadding = (groupWidth - barWidth * seriesCount) / 2;

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
          aria-label={title || "Bar chart"}>
          {/* Y-axis grid */}
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

          {/* X-axis line */}
          <line
            x1={padding.left}
            x2={padding.left + chartW}
            y1={padding.top + chartH}
            y2={padding.top + chartH}
            stroke="#cbd5e1"
            strokeWidth={1.5}
          />

          {/* Bars */}
          {data.map((d, gi) => {
            const groupX = padding.left + gi * groupWidth;
            return (
              <g key={gi}>
                {d.values.map((v, si) => {
                  const barH = (v / niceMax) * chartH;
                  const x = groupX + groupPadding + si * barWidth;
                  const y = padding.top + chartH - barH;
                  return (
                    <g key={si}>
                      <rect
                        x={x + 1}
                        y={y}
                        width={barWidth - 2}
                        height={Math.max(2, barH)}
                        fill={d.colors[si]}
                        rx={3}
                        className="transition-opacity duration-300 hover:opacity-80"
                      />
                      {/* Value label on top of bar */}
                      <text
                        x={x + barWidth / 2 - 1}
                        y={y - 6}
                        fontSize={10}
                        fontWeight={700}
                        fill="#0a1a3d"
                        textAnchor="middle">
                        {v}
                        {yUnit}
                      </text>
                    </g>
                  );
                })}
                {/* X-axis category label */}
                <text
                  x={groupX + groupWidth / 2}
                  y={padding.top + chartH + 22}
                  fontSize={11}
                  fontWeight={600}
                  fill="#475569"
                  textAnchor="middle">
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      {seriesLabels.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {seriesLabels.map((sl, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-sm"
                style={{ backgroundColor: data[0].colors[i] }}
              />
              <span className="text-sm font-semibold text-navy-900">
                {sl}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
