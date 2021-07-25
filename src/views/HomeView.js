import React from 'react';
import styles from '../styles/HomeView.module.css'

const HomeView = () =>
    <div className={styles.container}>
        <h1 className={styles.title}>
            Sometime here will be an amazing page :)
            <span role="img" aria-label="Иконка приветствия">
                💁‍♀️
            </span>
        </h1>
    </div>
 
export default HomeView;