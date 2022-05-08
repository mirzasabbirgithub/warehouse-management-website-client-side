import React, { useEffect, useState } from 'react';

const useData = () => {
          const [items, setItems] = useState([]);
          useEffect(() => {
                    fetch('https://blooming-wave-81568.herokuapp.com/item')
                              .then(res => res.json())
                              .then(data => setItems(data));
          }, [])
          return [items, setItems];
};

export default useData;