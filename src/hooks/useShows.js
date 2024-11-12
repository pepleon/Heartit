

import { useState, useEffect } from 'react';
import axios from 'axios';

const useShows = (query = 'cars') => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);  
      try {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
        setShows(response.data);  
      } catch (err) {
        setError(err);  
      } finally {
        setLoading(false);  
      }
    };

    fetchShows();  

  }, [query]); 

  return { shows, loading, error };
};

export default useShows;
