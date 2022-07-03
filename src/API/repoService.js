import axios from 'axios'
export default class repoService {
    static async getData(query){
        try {
          const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`)
          return response.data
        } catch (error) {
          return error.message
        }
    }
}