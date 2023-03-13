import axios from 'axios';
import { useState } from 'react';
import psl from 'psl'

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);
  const doRequest = async (props = {}) => {
    const api = axios.create({
      baseURL: location.origin
    });
    console.log("tasak1", url, location.origin)
    try {
      setErrors(null);
      const response = await api[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log(err)
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};