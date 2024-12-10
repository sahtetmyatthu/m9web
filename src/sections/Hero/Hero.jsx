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
import CV from '../../assets/cv.pdf';
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
        <h1>
        Winner 3
        </h1>
        <h2>M9 Sham Koe Mee</h2>
        {/* <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span> */}
        
        <p className={styles.description}>

        ရှမ်းကိုးမီး ဘူးကြီး ငါးပစ်ဂိမ်းများကို
        တနေရာတည်းမှာဆော့ကစားနိုင်ပါပြီ အောက်ပါ ဘိုက်ဘာ Viber တယ်လီဂရမ် Telegramတို့မှဆက်သွယ်ပြီး အကောင့်များရယူနိုင်ပါသည်။

        {/* <br />
        တစ်ယူနစ်တစ်ကျပ်နှုန်းနဲ့ အနည်းဆုံး ၁၀၀၀ မှစသွင်းကစားလိုရပြီး/ ထုတ်ငွေက 
        သွင်းငွေရဲ့ ၂ ဆပြည့်အောင်ကစားပြီးရင် အနည်းဆုံး 10000 ကနေစပြီးစိတ်ကြိုက်ထုတ်လိုရပါတယ်ရှင့်  " */}
        </p>

        <a href={CV} download>
          <button className="hover">Download APK</button>
        </a>

        <App/>
       

        
      </div>
    </section>
  );
}

export default Hero;
