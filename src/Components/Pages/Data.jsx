import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Data() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    axios.get('https://nayemmiah.pythonanywhere.com/about/api/')
    

      .then(response => {
       
        console.log('this is the data..',response.data);
        // setArticles(response.data.articles[0]);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  

  }, []);



  

  return (
    <div>
  

        
    </div>
   

  );
}

export default Data;




