import { useState, useEffect } from "react";
import { getInstance } from "../utils/axiosClient";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInstance.get(endpoint);
        setData(response.data.records);
      } catch (error) {
        console.error("데이터를 불러오지 못했습니다.", error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
};
