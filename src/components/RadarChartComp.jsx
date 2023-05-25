import {
  PolarAngleAxis,
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  Radar,
} from "recharts";
import PropTypes from "prop-types";

const RadarChartComp = ({ datas }) => {
  return (
    <div className="radarchart__container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart width="50%" height="50%" outerRadius="50%" data={datas}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            fontSize={12}
            tickLine={false}
          />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChartComp.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default RadarChartComp;
