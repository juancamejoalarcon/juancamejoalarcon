import axios from 'axios'

export class GithubService {
    getPinnedRepos(): Promise<any> {
        return new Promise((resolve, reject) => {
          axios.get(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=juancamejoalarcon`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => console.log(error))
        });
    }
  
}

export default new GithubService()