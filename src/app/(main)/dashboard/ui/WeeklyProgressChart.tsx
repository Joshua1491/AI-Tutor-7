"use client";
import { useEffect, useRef } from "react";
import type { Chart } from "chart.js";

export function WeeklyProgressChart({
  series,
}: {
  series: { labels: readonly string[]; values: readonly number[] };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const initChart = async () => {
      const { Chart } = await import("chart.js/auto");

      if (!canvasRef.current) return;

      // Destroy existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }

      // Create new chart
      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: [...series.labels],
          datasets: [
            {
              label: "Hours",
              data: [...series.values],
              backgroundColor: "#6366F1",
              borderColor: "#4F46E5",
              borderWidth: 1,
              borderRadius: 4,
              categoryPercentage: 0.6,
              barPercentage: 0.7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 },
              grid: { color: "#F3F4F6" },
            },
            x: {
              grid: { display: false },
            },
          },
        },
      });
    };

    initChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [series]);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Weekly Progress</h2>
        <select
          className="rounded-lg border border-gray-200 px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="this-week"
          aria-label="Select time period"
        >
          <option value="this-week">This Week</option>
          <option value="last-week">Last Week</option>
          <option value="this-month">This Month</option>
        </select>
      </div>
      <div className="h-64">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
