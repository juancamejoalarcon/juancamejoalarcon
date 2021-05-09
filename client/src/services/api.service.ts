// import axios from 'axios'

export class ApiService {

  
    get blogs(): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve('caca')
            // return axios.get('/blogs')
            // .then(function (response) {
            //   // handle success
            //   console.log(response);
            // })
            // .catch(function (error) {
            //   // handle error
            //   console.log(error);
            // })
            // .then(function () {
            //   // always executed
            // });
          });
    }

  
  }