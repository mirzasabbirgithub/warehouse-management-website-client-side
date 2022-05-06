import React, { useEffect, useState } from 'react';

const useData = () => {
          const [items, setItems] = useState([]);
          useEffect(() => {
                    fetch('http://localhost:5000/item')
                              .then(res => res.json())
                              .then(data => setItems(data));
          }, [])
          return [items, setItems];
};

export default useData;