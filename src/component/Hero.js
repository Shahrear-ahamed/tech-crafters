import { Typography } from "antd";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_div}>
        <div className={styles.hero_text}>
          <h5 level={5} className={styles.hero_title}>
            Discover Your Adventure
          </h5>
          <p>Unlock the Ultimate World of Computing and Gaming Excellence.</p>
          <div>
            <Link href="/pc-builder" className={styles.hero_link}>
              Build Your Own Pc
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
