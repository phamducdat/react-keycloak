import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

const Forbidden: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchAndSetData() {
      const url = `https://datpd.free.beeceptor.com/`;
      const fetchedData = await fetchData(url);
      setData(fetchedData);
    }

    fetchAndSetData();
  }, []);

  console.log('dat with fetched data = ', data);

  return <div>Forbidden</div>;
};

export default Forbidden;
