/**
 * DonutChart — SVG donut chart with legend.
 * Pure SVG, no dependencies, theme-friendly.
 *
 * @param {Array<{label: string, value: number, color: string}>} data
 * @param {string} title
 * @param {string} subtitle
 * @param {number} size - diameter in px (default 320)
 * @param {number} thickness - stroke width (default 56)
 */
export default function DonutChart({
  data,
  title,
  subtitle,
  size = 320,
  thickness = 56,
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  // Compute each segment's offset/dasharray
  let accumulated = 0;
  const segments = data.map((d) => {
    const fraction = d.value / total;
    const dash = fraction * circumference;
    const gap = circumference - dash;
    const offset = circumference * 0.25 - accumulated; // start at 12 o'clock
    accumulated += dash;
    return { ...d, dash, gap, offset, fraction };
  });

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

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-evenly">
        {/* Chart */}
        <div className="relative shrink-0" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="-rotate-90"
            role="img"
            aria-label={title || "Donut chart"}>
            {/* Background track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={thickness}
            />
            {/* Segments */}
            {segments.map((s, i) => (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={thickness}
                strokeDasharray={`${s.dash} ${s.gap}`}
                strokeDashoffset={s.offset}
                className="transition-all duration-700"
              />
            ))}
            {/* Center hole highlight */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius - thickness / 2}
              fill="white"
            />
          </svg>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-500">
              Total
            </p>
            <p className="font-display text-4xl font-black text-navy-900">
              {total}%
            </p>
          </div>
        </div>

        {/* Legend */}
        <ul className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
          {data.map((d, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-sm text-navy-900">
                <span className="font-semibold">{d.label}</span>
                <span className="ml-1 font-bold text-gold-600">
                  — {d.value}%
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
