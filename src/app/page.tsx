/*
 * Author: @aleoterob
 * Date: 2024-12-28
 */
import type { Metadata } from "next";
import FinancialCharts from "./ui/charts/financial-chats";

export const metadata: Metadata = {
  title: "Home | Next.js + Chart.js + Tailwind",
  description: "Remember: Metadata is good. Metadata helps us.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center pb-8">
      <h1 className="pt-12 text-4xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl text-center">
        Next.js + Chart.js + Tailwind.
      </h1>
      <h1 className="pt-4  pb-6 text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-center">
        Financial Charts Component that shows dummy data.
      </h1>
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        <FinancialCharts />
      </div>
    </main>
  );
}
