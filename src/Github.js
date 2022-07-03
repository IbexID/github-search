import { useEffect, useState } from "react";
import repoService from "./API/repoService";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";


function Github() {
  const [searchQuery, setSearchQuery] = useState('')
  const [result, setResult] = useState([])
  const [isResultEmpty, setIsResultEmpty] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const fetchRepos = async (query) =>{
      setIsLoading(true)
      const response = await repoService.getData(query)
      if(typeof response === 'string'){
        setErrorMessage(response)
        return
      } else {
        setErrorMessage('')
      }
      setResult(response)
      setTimeout(()=>{
        setIsLoading(false)

      },500)
        if(result){
          setIsResultEmpty(false)
        }
      
      
  }


  useEffect(()=>{
    if(!result?.items?.length){
      setIsResultEmpty(true)
    }
  }, [result, isResultEmpty, errorMessage])


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
      isLoading={isLoading}
      errorMessage={errorMessage}
      />
    </div>
  );
}

export default Github;
