import React, { useEffect, useState } from 'react';
import { fetcher } from '../fetcher';
import {useAuth} from '../account/Authentication';

function FetchProfileData() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {user} = useAuth();
  

  useEffect(() => {
    const FetchData = async () => {
      try {
        const resUser = await fetcher.get(`/user/${user.username}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        setUserData(resUser.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    FetchData()
  }, [user.username]);

  return { userData, setUserData, loading, error };
}

export { FetchProfileData };
