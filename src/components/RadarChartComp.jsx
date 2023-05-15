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
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChartComp.propTypes = {
  datas: PropTypes.array,
};

export default RadarChartComp;