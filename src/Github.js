import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";


function Github() {
  const [searchQuery, setSearchQuery] = useState('')
  const [result, setResult] = useState([])
  const [isResultEmpty, setIsResultEmpty] = useState(true)
  const fetchRepos = async (query) =>{
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`)
      setResult(response.data)
      console.log(result)
      if(result){
        setIsResultEmpty(false)
      }
  }
  useEffect(()=>{
    if(!result?.items?.length){
      setIsResultEmpty(true)
    }
  }, [result, isResultEmpty])
  return (
    <div className="App">
      <Search 
      fetchRepos={fetchRepos}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}      
      />
      <SearchResults 
      result={result}
      isResultEmpty={isResultEmpty}
      />
    </div>
  );
}

export default Github;
