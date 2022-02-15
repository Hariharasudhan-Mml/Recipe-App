import SearchStyles from './search.module.css';
import { Search as SearchIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Search = ({ setKeyword, keywords, setDefaults, setResults, Axios }) => {

    const getResults = async () => {
        try {
            if (keywords.trim()) {
                const res = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${keywords}&number=100&fillIngredients=true&addRecipeInformation=true&apiKey=${process.env.REACT_APP_API_KEY}`);
                const data = res.data.results;
                if (data.length === 0) {
                    alert('No Results Found!')
                } else {
                    setResults(data);
                    console.log(data);
                    setDefaults(false);

                }
            } else {
                alert('Search  cannot be empty')
            }
        }
        catch (err) {
            alert(err.message);
        }
    }
    return (
        <div className={SearchStyles.search}>
            <div className={SearchStyles.search__input}>
                <input type='search' className={SearchStyles.input} value={keywords} onChange={(e) => setKeyword(e.target.value)} /><div className={SearchStyles.search__icon}><SearchIcon /></div>
            </div>
            <div className={SearchStyles.search__button}>
                <Button onClick={getResults}>Search </Button>
            </div>

        </div>
    )
}

export default Search;