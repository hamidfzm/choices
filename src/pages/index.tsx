import type { NextPage } from 'next';

import Choices from '../assets/Choices';
import NestedChoice from '../components/NestedChoice';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NestedChoice placeholder="Choose something" choices={Choices} />
    </div>
  );
};

export default Home;
