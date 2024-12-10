import styles from './HeroStyles.module.css';
import heroImg from '../../assets/winner3.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import App from '../App/App';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Winner 3</h1>
        <h2>M9 Sham Koe Mee</h2>

        <p className={styles.description}>
          ရှမ်းကိုးမီး ဘူးကြီး ငါးပစ်ဂိမ်းများကို
          တနေရာတည်းမှာဆော့ကစားနိုင်ပါပြီ အောက်ပါ Viber တယ်လီဂရမ် Telegram
          တို့မှဆက်သွယ်ပြီး အကောင့်များရယူနိုင်ပါသည်။
        </p>

        {/* Button to download APK */}
        <a href="/m9skm.apk" download>
          <button className={styles.downloadButton}>Download APK</button>
        </a>

        <App />
      </div>
    </section>
  );
}

export default Hero;
