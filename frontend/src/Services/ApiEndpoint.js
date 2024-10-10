import axios from "axios";


const instance = axios.create ({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials:true
})

  export const get=(url,params)=>instance.get(url,{params})
  export const post=(url,data)=> instance.post(url,data)
  export const put=(url,data)=> instance.put(url,data)
  export const delet=(url)=> instance.delete(url)

  // Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
         console.log('intercepted response', response);
    return response;
  }, function (error) {
       
    console.log('intercepted error', error);
    return Promise.reject(error);
  });

 

  // Fetch user purchases
  export const getUserPurchases = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Assuming JWT is stored here
      const response = await instance.get('/api/purchases', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      return response.data; // Return data
    } catch (error) {
      console.error('Error fetching user purchases:', error.message);
      throw error; // Throw error so it can be caught in the component
    }
  };
  