import axios from 'axios';
import { config } from '../utils/token';

const baseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/users'
    : '/api/users';

const updateUser = async (user) => {
  try {
    const res = await axios.put(baseUrl, user, config);
    return res.data;
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

const followLesson = async (id) => {
  try {
    const res = await axios.put(`${baseUrl}/follow/`, { id }, config);

    return res.data;
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

const checkAdmin = async (setIsAdmin) => {
  const res = await axios.get(`${baseUrl}/admin`, config);
  setIsAdmin(res.data.isAdmin);
};

const getUserById = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}?id=${id}`, config);
    return res.data;
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

const getFollowing = async (setFollowing) => {
  try {
    const res = await axios.get(`${baseUrl}/following`, config);
    setFollowing(res.data);
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

const getNotifications = async (setNotifications, setLoading) => {
  try {
    const res = await axios.get(`${baseUrl}/notifications`, config);
    setNotifications(res.data);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    return e.response
      ? e.response.data
      : 'Onur bir şeyleri batırdı. Hata kodu 42';
  }
};

const deleteNotifications = async () => {
  try {
    await axios.delete(`${baseUrl}/notifications`, config);
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

const unfollowLesson = async (id) => {
  try {
    const res = await axios.put(`${baseUrl}/follow/`, { id }, config);
    return res.data;
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};
const getPopulatedUser = async (username) => {
  try {
    const res = await axios.get(`${baseUrl}/${username}`, config);
    return res.data;
  } catch (e) {
    return e.response
      ? e.response.data
      : { error: 'Onur bir şeyleri batırdı. Hata kodu 42' };
  }
};

export default {
  updateUser,
  getPopulatedUser,
  followLesson,
  unfollowLesson,
  checkAdmin,
  getUserById,
  getFollowing,
  getNotifications,
  deleteNotifications,
};
