import caloriesImg from '../../images/calories.jpg';
import fatImg from '../../images/fat.jpg';
import carbsImg from '../../images/carbs.jpg';
import proteinImg from '../../images/protein.jpg';
import sugarImg from '../../images/sugar.jpg';
import fiberImg from '../../images/fiber.jpg';
import sodiumImg from '../../images/sodium.jpg';


const fuelFactsData = [
  { nutrient: 'Calories', amount: 250, image: caloriesImg },
  { nutrient: 'Fat', amount: '10g', image: fatImg },
  { nutrient: 'Carbs', amount: '30g', image: carbsImg },
  { nutrient: 'Protein', amount: '8g', image: proteinImg },
  { nutrient: 'Sugar', amount: '5g', image: sugarImg },
  { nutrient: 'Fiber', amount: '3g', image: fiberImg },
  { nutrient: 'Sodium', amount: '500mg', image: sodiumImg },
];

const FuelFacts = () => {
  return (
    <div className="fuel-facts-container">
      <div className="fuel-facts-header">
        <h1>Nutrition Facts</h1>
        <p>Fuel your body with the right nutrients!</p>
      </div>
      <table className="fuel-facts-table">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {fuelFactsData.map((fact, index) => (
            <tr key={index}>
              <td>{fact.nutrient}</td>
              <td>{fact.amount}</td>
              <td>
                <img
                  src={fact.image}
                  alt={fact.nutrient}
                  className={`nutrient-image ${index % 2 === 0 ? 'circle' : 'rounded'}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fuel-facts-footer">
        <p>Keep your body healthy and fueled!</p>
      </div>
    </div>
  );
};

export default FuelFacts;
