import AnalyticDashboard from "@/components/analytic";
import { analyticsUtil } from "@/lib/utils/analytics";
import { dateUtil } from "@/lib/utils/date";
import { NextPage } from "next";

const Analytic: NextPage = async () => {
  const pageView = await analyticsUtil.retrieveDays("landing-page", 2);

  const totalPageViews = pageView.reduce((acc, curr) => {
    return (
      acc +
      curr.values.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!;
      }, 0)
    );
  }, 0);

  const avgVisitor = (totalPageViews / 7).toFixed(1);

  const amtVisitorToday = pageView
    .filter((item) => item.date === dateUtil.getDate())
    .reduce(
      (acc, curr) =>
        acc +
        curr.values.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0),
      0
    );

  return (
    <section className="min-h-screen w-full py-12 flex justify-center items-center bg-primary-200">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <AnalyticDashboard
          avgVisitor={avgVisitor}
          amtVisitor={amtVisitorToday}
          timeSeriesPageViews={pageView}
        />
      </div>
    </section>
  );
};

export default Analytic;
