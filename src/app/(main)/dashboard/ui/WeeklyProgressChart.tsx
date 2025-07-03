"use client";
import { useEffect, useRef } from "react";
import type { Chart } from "chart.js";

export function WeeklyProgressChart({
  series,
}: {
  series: { labels: readonly string[]; values: readonly number[] };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: Chart | undefined;
    (async () => {
      const { Chart } = await import("chart.js/auto");
      if (canvasRef.current) {
        chart = new Chart(canvasRef.current, {
          type: "bar",
          data: {
            labels: [...series.labels],
            datasets: [
              {
                label: "Lessons Completed",
                data: [...series.values],
                backgroundColor: "#6366F1",
                borderRadius: 4,
                barThickness: 32,
              },
            ],
          },
          options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
          },
        });
      }
    })();
    return () => chart?.destroy();
  }, [series]);

  return <canvas ref={canvasRef} className="h-64 w-full" />;
}
