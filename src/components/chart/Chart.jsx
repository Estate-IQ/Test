import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  title,
  data,
  EssentialPlan,
  FreePlan,
  Standard,
  Premium,
  grid,
}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey={FreePlan}
            stroke="#2c4af3"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey={EssentialPlan}
            stroke="#FF0000"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey={Standard}
            stroke="#39E040"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey={Premium}
            stroke="#F2CD16"
          />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
