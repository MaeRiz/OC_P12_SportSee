const Nutritional = ({ item }) => {
  if (item[0] === "calorieCount") {
    return (
      <div className="nutritional__item calorie">
        <div className="nutritional__item--icon">
          <i className="fa-solid fa-fire"></i>
        </div>
        <p className="nutritional__item--value">
          {item[1]}kCal <br />
          <span className="nutritional__item--name">Calories</span>
        </p>
      </div>
    );
  }
  if (item[0] === "proteinCount") {
    return (
      <div className="nutritional__item protein">
        <div className="nutritional__item--icon">
          <i className="fa-solid fa-drumstick-bite"></i>
        </div>
        <p className="nutritional__item--value">
          {item[1]}g <br />
          <span className="nutritional__item--name">Proteines</span>
        </p>
      </div>
    );
  }

  if (item[0] === "carbohydrateCount") {
    return (
      <div className="nutritional__item carbo">
        <div className="nutritional__item--icon">
          <i className="fa-brands fa-apple"></i>
        </div>
        <p className="nutritional__item--value">
          {item[1]}g <br />
          <span className="nutritional__item--name">Glucides</span>
        </p>
      </div>
    );
  }

  if (item[0] === "lipidCount") {
    return (
      <div className="nutritional__item lipid">
        <div className="nutritional__item--icon">
          <i className="fa-solid fa-burger"></i>
        </div>
        <p className="nutritional__item--value">
          {item[1]}g <br />
          <span className="nutritional__item--name">Lipides</span>
        </p>
      </div>
    );
  }
};
export default Nutritional;
