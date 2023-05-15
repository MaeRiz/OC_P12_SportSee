import { LineChart, XAxis, Tooltip, ResponsiveContainer, Line } from "recharts";
import PropTypes from "prop-types";

const LineChartComp = ({ datas }) => {
  return (
    <div className="linechart__container">
      <div className="linechart__header">
        <p className="linechart__header--title">
          Durée moyenne des
          <br />
          sessions
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#FFFFFF"
            fontSize={10}
            opacity={0.7}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            activeDot={{ r: 3 }}
            strokeWidth={1.5}
            dot={false}
            stroke="white"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineChartComp.propTypes = {
  datas: PropTypes.array,
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip--text">
          {payload[0].payload.sessionLength} min
        </p>
      </div>
    );
  }

  return null;
};

export default LineChartComp;
