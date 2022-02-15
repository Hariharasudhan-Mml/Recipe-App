import Styles from './Dish.module.css';

const Dish = ({ ingredients, title, category, diets, timeTaken, image }) => {
    return (
        <div className={Styles.dish}>
            <div className={Styles.image} >
                <img src={image} />
            </div>
            <div className={Styles.details}>
                <h4 className={Styles.title}>{title}</h4>
                <p className={Styles.row}><strong>Ingredients :</strong>{ingredients.map(({ name }) => name).join(",")}</p>
                <p className={Styles.row}><strong>Category :</strong>{category ? (category.map(name => name).join(',')) : (<bold>not specified</bold>)}</p>
                <p className={Styles.row}><strong>Diet :</strong>{diets ? diets.map(diet => diet).join(',') : "Not Specified"}</p>
                <p className={Styles.row}> <strong>Timetaken : </strong>{timeTaken} Minutes</p>
            </div>
        </div>
    )
}


export default Dish;