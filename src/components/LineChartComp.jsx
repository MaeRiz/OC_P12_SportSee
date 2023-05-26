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
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="chart_container"
      >
        <LineChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onMouseMove={(event) => {
            const container = document.getElementsByClassName(
              "linechart__container"
            )[0];
            if (event.activeCoordinate) {
              const mouseXpercentage = Math.round(
                (event.activeCoordinate.x / container.clientWidth) * 100
              );
              container.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(220,0,0,1) ${mouseXpercentage}%)`;
            } else {
              container.style.background = `#FF0000`;
            }
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
            cursor={false}
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
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
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
