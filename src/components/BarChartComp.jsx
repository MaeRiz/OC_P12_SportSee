import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const BarChartComp = ({ datas }) => {
  return (
    <div className="barchart__container">
      <div className="barchart__header">
        <p className="barchart__header--title">Activité quotidienne</p>
        <ul className="barchart__header--legend">
          <li className="barchart__header--legend--text-kg">
            <i className="fa-solid fa-circle"></i> Poids (kg)
          </li>
          <li className="barchart__header--legend--text-cal">
            <i className="fa-solid fa-circle"></i> Calories (kCal)
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            fontSize={15}
            opacity={0.7}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            fontSize={15}
            opacity={0.7}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarChartComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip--text">
          {payload[0].payload.calories} kCal
        </p>
        <p className="custom-tooltip--text">{payload[0].payload.kilogram} kg</p>
      </div>
    );
  }

  return null;
};

export default BarChartComp;
