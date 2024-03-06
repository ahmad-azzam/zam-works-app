import { analyticsUtil } from "@/lib/utils/analytics";
import { BarChart, Card } from "@tremor/react";
import React from "react";

interface AnalyticDashboardProps {
  avgVisitor: string;
  amtVisitor: number;
  timeSeriesPageViews: Awaited<ReturnType<typeof analyticsUtil.retrieveDays>>;
}

const AnalyticDashboard: React.FC<AnalyticDashboardProps> = ({
  avgVisitor,
  amtVisitor,
  timeSeriesPageViews,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-dark-tremor-content">Avg, visitors/day</p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {avgVisitor}
          </p>
        </Card>
        <Card className="w-full mx-auto max-w-xs">
          <p className="text-dark-tremor-content">Visitors Today</p>
          <p className="text-3xl text-dark-tremor-content-strong font-semibold">
            {amtVisitor}
          </p>
        </Card>
      </div>

      <Card>
        {timeSeriesPageViews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
            data={timeSeriesPageViews.map((item) => ({
              name: item.date,
              Visitors: item.values.reduce(
                (acc, curr) => acc + Object.values(curr)[0]!,
                0
              ),
            }))}
            categories={["Visitors"]}
            index="name"
          />
        ) : null}
      </Card>
    </div>
  );
};

export default AnalyticDashboard;
