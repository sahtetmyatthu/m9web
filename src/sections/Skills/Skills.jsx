import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">သတ်မှတ်ချက်များ</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="3,000 ကျပ်မှစ၍ကစားနိုင်ပါတယ်ရှင့်" />
        <SkillList src={checkMarkIcon} skill="M9 Shan Koe Mee ဖရီးအမှတ်နဲ့ကစားလိုရလိုသာမက အနိုင်ရငွေကိုလဲထုတ်ယူလိုရပါတယ်ရှင့်" />
        <SkillList src={checkMarkIcon} skill="နေ့စဉ်ငွေသွင်းတိုင်းရဘောနပ် (၁၀) ရာခိုင်နှုန်းအား အကြိမ်ရေ ကန့်သတ်ချက်မရှိပဲ အများဆုံး (၂၀၀၀)အထိပေးပါတယ်ရှင့်"/>
        <SkillList src={checkMarkIcon} skill="သွင်းငွေရဲ့ ၂ ဆပြည့်အောင်ကစားပြီးရင် အနည်းဆုံး 10000 ကနေစပြီးစိတ်ကြိုက်ထုတ်လိုရပါတယ်ရှင့်" />
        <SkillList src={checkMarkIcon} skill="ငွေသွင်း/ငွေထုတ် နှင့် Service 24နာရီ ပိတ်ရက်မရှိဝန်ဆောင်မှုပါရှင့်" />
      </div>
      {/* <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div> */}
    </section>
  );
}

export default Skills;
