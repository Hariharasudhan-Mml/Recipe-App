import { useEffect, useState } from 'react';
import Axios from 'axios';
import Search from './components/search/search';
import Container from './components/Container/container';
import styles from './App.module.css';
import Button from '@material-ui/core/Button';

function App() {
    const [keyword, setKeyword] = useState('');
    const [defaults, setDefaults] = useState(true);
    const [results, setResults] = useState([]);

    useEffect(() => {

        const fetching = async () => {
            try {
                const response = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?maxProtein=100&addRecipeInformation=true&fillIngredients=true&number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
                setResults(response.data.results)
            } catch (error) {
                alert(error.message);
            }
        }
        fetching();
    }, [])
const backButton=()=>{
    setKeyword('');
    setDefaults(true)
}

    return (< div className={styles.App} > {
        defaults && < Search setKeyword={setKeyword}
            setDefaults={setDefaults}
            keywords={keyword}
            setResults={setResults}
            Axios={Axios} />}
            { !defaults ? <Button className={styles.App__backbtn} onClick={backButton}>Back</Button> :null}
        {defaults ? < h2 className={styles.App_header} > Top Nutritious Food </h2> : <h2 className={styles.App_header}> Search Results For {keyword} </h2>}
        <Container results={results} />
    </div>
    );
}

export default App;