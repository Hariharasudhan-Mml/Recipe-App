import Dish from '../Dish/Dish';
import Styles from './container.module.css';

const Container = ({ results }) => {

    return (
        <div className={Styles.container}>
            {results.map(({title, missedIngredients, cuisines, diets, readyInMinutes, image }, index) => {
                return <Dish key={index} title={title} ingredients={missedIngredients} category={cuisines} diets={diets} timeTaken={readyInMinutes} image={image} />
            })}
        </div>
    )
}


export default Container;