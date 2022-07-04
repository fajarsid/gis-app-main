import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import Mapbox from '../../components/Maps/Mapbox';

const Landing = () => {
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Jalur Evakuasi</h1>
                <div className={styles.btn_con}>
                <button className={styles.white_btn}>
                    <Link style={{textDecoration:'none', color:'inherit'}} to='/signup'>Sign Up</Link>
				</button>
                <button className={styles.white_btn}>
                    <Link style={{textDecoration:'none', color:'inherit'}} to='/sign'>Sign</Link>
				</button>
                </div>
			</nav>
            <div className={styles.maps_con}>
            <div className={styles.featureMap}>
            <Mapbox height={500} />
            </div>
            </div>
		</div>
	);
};

export default Landing;