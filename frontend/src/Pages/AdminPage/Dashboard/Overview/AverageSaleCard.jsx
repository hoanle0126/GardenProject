import { alpha } from "@mui/material";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { primary } from "~/context/ColorContext";
import { useEffect, useState } from "react";
import { axiosClient } from "~/axios/AxiosClient";
import { formatCurrency } from "~/function/format";

const AverageSaleCard = () => {
  const [averageSale, setAverageSale] = useState([]);
  
  const getAverage = () => {
    axiosClient.get("/revenue").then((data) => {
      setAverageSale(data.data);
    });
  };
  useEffect(() => {
    getAverage();
  }, []);

  const average = () => {
    let total = 0;
    averageSale.forEach((element) => {
      total += element.avg;
    });
    total /= averageSale.length;
    return formatCurrency(total);
  };

  return (
    <div className="dashboard__overview--left-items">
      <div className="overview__card">
        <div className="overview__card--header">
          {average()}
          <div className="overview__card--badge"></div>
        </div>
        <div className="overview__card--subheader">Average Daily Sales</div>
      </div>
      <div className="overview__card--contents">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={averageSale}
            margin={{ left: 30, bottom: 20, top: 10 }}
          >
            <Bar dataKey="avg" fill={alpha(primary, 0.7)} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageSaleCard;
