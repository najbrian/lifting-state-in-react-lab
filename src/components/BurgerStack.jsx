// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const handleRemoveIngredient = () => {

  }
  return (
    <ul>
    {props.stack.map((ingredient,idx) => {
      return (
          <li key={idx} style={{backgroundColor: ingredient.color}}>{ingredient.name} <button onClick={() => props.removeFromBurger(idx)} type='submit'>-</button>
          </li>
      )
    })}
  </ul>
  )

};

export default BurgerStack;
