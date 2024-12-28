/*
 * Author: @aleoterob
 * Date: 2024-12-28
 */

"use client";

import React from "react";
import { Bar, Line, PolarArea, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const chartData = {
  barBorderRadius: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [150, 200, 250, 300, 350, 400],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  },
  lineDrawTime: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [120, 180, 220, 260, 300, 340],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  },
  polarArea: {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  },
  doughnut: {
    labels: ["Direct", "Referral", "Organic"],
    datasets: [
      {
        data: [400, 300, 300],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  },
  stackedBar: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Product A",
        data: [50, 60, 70, 80],
        backgroundColor: "#FF6384",
      },
      {
        label: "Product B",
        data: [30, 40, 50, 60],
        backgroundColor: "#36A2EB",
      },
      {
        label: "Product C",
        data: [20, 30, 40, 50],
        backgroundColor: "#FFCE56",
      },
    ],
  },
  delay: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30, 40],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
      },
    ],
  },
};

const FinancialCharts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Bar Chart</h2>
          <Bar data={chartData.barBorderRadius} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Line Chart</h2>
          <Line data={chartData.lineDrawTime} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Polar Area Chart
          </h2>
          <PolarArea data={chartData.polarArea} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Doughnut Chart
          </h2>
          <Doughnut data={chartData.doughnut} />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Stacked Bar Chart
          </h2>
          <Bar
            data={chartData.stackedBar}
            options={{
              plugins: { legend: { position: "top" } },
              scales: { x: { stacked: true }, y: { stacked: true } },
            }}
          />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Delay Chart
          </h2>
          <Line
            data={chartData.delay}
            options={{ animation: { delay: 200 } }}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialCharts;
