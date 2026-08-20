/**
 * HorizontalBarChart — Horizontal bar chart for ranking/comparison.
 * Pure SVG, no dependencies, theme-friendly.
 *
 * @param {Array<{label: string, value: number, color: string}>} data
 * @param {string} title
 * @param {string} subtitle
 * @param {string} unit
 * @param {number} width
 * @param {number} rowHeight
 */
export default function HorizontalBarChart({
  data,
  title,
  subtitle,
  unit = "",
  width = 720,
  rowHeight = 44,
}) {
  const labelWidth = 180;
  const valueWidth = 80;
  const barAreaWidth = width - labelWidth - valueWidth - 24;
  const height = data.length * rowHeight + 16;

  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const niceMax = Math.ceil(maxValue / 10) * 10 || 10;

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
          aria-label={title || "Horizontal bar chart"}>
          {data.map((d, i) => {
            const y = i * rowHeight + 8;
            const barH = rowHeight - 12;
            const barW = (d.value / niceMax) * barAreaWidth;
            const cy = y + barH / 2;
            return (
              <g key={i}>
                {/* Label */}
                <text
                  x={labelWidth - 12}
                  y={cy + 4}
                  fontSize={12}
                  fontWeight={600}
                  fill="#1e3a8a"
                  textAnchor="end">
                  {d.label}
                </text>
                {/* Track */}
                <rect
                  x={labelWidth}
                  y={y}
                  width={barAreaWidth}
                  height={barH}
                  fill="#f1f5f9"
                  rx={4}
                />
                {/* Bar */}
                <rect
                  x={labelWidth}
                  y={y}
                  width={Math.max(4, barW)}
                  height={barH}
                  fill={d.color}
                  rx={4}
                  className="transition-opacity duration-300 hover:opacity-80"
                />
                {/* Value */}
                <text
                  x={labelWidth + barW + 8}
                  y={cy + 4}
                  fontSize={12}
                  fontWeight={700}
                  fill="#0a1a3d">
                  {d.value}
                  {unit}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
