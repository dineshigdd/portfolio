import axios from 'axios';

export const submitUser = (userData) => {
       return axios.post('/api/users/sendmsg', userData)
       .then( res => res.data.msgConfirm);
  };
  