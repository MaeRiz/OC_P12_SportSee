import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const RadialBarChartComp = ({ datas }) => {
  return (
    <div className="radialchart__container">
      <p className="radialchart--title">Score</p>
      <div className="radialchart--progress-area">
        <p className="radialchart--progress-area--percent">{datas[0].value}%</p>
        <p className="radialchart--progress-area--goal">
          de votre
          <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={90}
          endAngle={450}
          cx="50%"
          cy="50%"
          innerRadius={70}
          barSize={10}
          outerRadius={120}
          data={datas}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={50} fill="#FF0000" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarChartComp;
