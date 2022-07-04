import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.sign_container}>
      <div className={styles.sign_form_container}>
        <div className={styles.content}>
        <div className={styles.sign}>
            <Link to='/landing'>
              <button type='button' className={styles.close_btn}>
                X
              </button>
            </Link>
          </div>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>GIS APP</h1>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <div className={styles.register}>
              Belum Punya <Link to='/signup'>Akun</Link>?
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type='submit' className={styles.cos_btn}>
              Sing In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
