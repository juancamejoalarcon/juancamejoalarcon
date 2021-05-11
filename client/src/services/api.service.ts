import axios from 'axios'

export class ApiService {


  
  
    getAllblogs(): Promise<any> {
        return new Promise((resolve, reject) => {
          axios.get(`${process.env.REACT_APP_ENDPOINT}/blogs`)
          .then((response) => {
            // handle success
            resolve(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        });
    }

    saveBlog(params: { title: string, description: string, body: string }): Promise<any> {
      const { title, description, body } = params
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_ENDPOINT}/blog`, {
          title,
          description,
          body
        })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          console.log(error);
        });
      });
  }

  
}

export default new ApiService()