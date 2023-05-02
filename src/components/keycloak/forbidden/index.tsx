import React, { useEffect, useState } from 'react';

const Forbidden: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchAndSetData() {
      try {
        const url =
          'http://localhost:8000/external/v1/admin/realms/master/users/123/clients/123/permission';
        const response = await fetch(url);
        if (!response.ok) {
          console.log('dat with error response: ', response.status);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('dat with error =  ', error);
      }
    }

    fetchAndSetData();
  }, []);

  console.log('dat with fetched data = ', data);

  return <div>Forbidden</div>;
};

export default Forbidden;
