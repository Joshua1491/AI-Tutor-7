"use client";
import { useEffect, useRef, useState } from "react";
import type { Chart } from "chart.js";

export function WeeklyProgressChart({
  series,
}: {
  series: { labels: readonly string[]; values: readonly number[] };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initChart = async () => {
      try {
        // Validate series data before proceeding
        if (
          !series ||
          !series.labels ||
          !series.values ||
          !Array.isArray(series.labels) ||
          !Array.isArray(series.values)
        ) {
          console.warn("Invalid series data provided to WeeklyProgressChart");
          setError("Invalid chart data");
          setIsLoading(false);
          return;
        }

        if (series.labels.length === 0 || series.values.length === 0) {
          console.warn("Empty series data provided to WeeklyProgressChart");
          setError("No data available");
          setIsLoading(false);
          return;
        }

        if (!canvasRef.current) {
          setError("Canvas not available");
          setIsLoading(false);
          return;
        }

        // Import Chart.js safely with proper error handling
        let ChartClass;
        try {
          // Use a more reliable import method
          const chartModule = await import("chart.js");
          await import("chart.js/auto");
          ChartClass = chartModule.Chart;
        } catch (importError) {
          console.error("Failed to import Chart.js:", importError);
          try {
            // Fallback import method
            const fallbackModule = await import("chart.js/auto");
            ChartClass = fallbackModule.Chart;
          } catch (fallbackError) {
            console.error("Fallback import also failed:", fallbackError);
            setError("Failed to load chart library");
            setIsLoading(false);
            return;
          }
        }

        // Destroy existing chart if it exists
        if (chartRef.current) {
          try {
            chartRef.current.destroy();
          } catch (destroyError) {
            console.warn("Error destroying previous chart:", destroyError);
          }
          chartRef.current = null;
        }

        // Create new chart with validated data
        chartRef.current = new ChartClass(canvasRef.current, {
          type: "bar",
          data: {
            labels: Array.from(series.labels),
            datasets: [
              {
                label: "Hours",
                data: Array.from(series.values),
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

        setError(null);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to initialize chart:", error);
        setError("Failed to initialize chart");
        setIsLoading(false);
      }
    };

    // Add a small delay to ensure DOM is ready and avoid webpack issues
    const timer = setTimeout(() => {
      if (series && series.labels && series.values) {
        initChart();
      } else {
        setError("Waiting for data...");
        setIsLoading(false);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (chartRef.current) {
        try {
          chartRef.current.destroy();
        } catch (error) {
          console.warn("Error destroying chart:", error);
        }
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
      <div className="h-64 flex items-center justify-center">
        {isLoading ? (
          <div className="text-gray-500">Loading chart...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <canvas ref={canvasRef} />
        )}
      </div>
    </div>
  );
}
