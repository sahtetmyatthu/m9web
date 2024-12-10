import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/ex1.jpg';
import telegram from '../../assets/ex2.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">တိုက်ရိုက် ဆက်သွယ်ရန်လင့်</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://msng.link/o?959453384339=vi"
          h3="Viber"
          p="M9 Shan Koe Mee ဖရီးအမှတ်နဲ့ကစားလိုရလိုသာမက အနိုင်ရငွေကိုလဲထုတ်ယူလိုရပါတယ်ရှင့်။ "
        />
        <ProjectCard
          src={telegram}
          link="https://t.me/Winner3_bot"
          h3="Telegram"
          p="agent ဆိုဒ်မဟုတ်သောကြောင့် အနိုင်ငွေများယုံကြည်စိတ်ချစွာအကန့်သတ်မရှိ မိနစ်ပိုင်းအတွင်းထုတ်ယူနိုင်ပါတယ်ရှင့်"
        />
        <ProjectCard
          src={viberr}
          link="https://t.me/Winner3_bot"
          h3="Phone"
          p="ရှည်စွာရပ်တည်လာသည့်ဆိုဒ်ကြီးဖြစ်သောကြောင့် အနိုင်ငွေများယုံကြည်စိတ်ချစွာ မိနစ်ပိုင်းအတွင်း ထုတ်ယူလို့ရပါတယ်ရှင့်"
        />
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="ရှည်စွာရပ်တည်လာသည့်ဆိုဒ်ကြီးဖြစ်သောကြောင့် အနိုင်ငွေများယုံကြည်စိတ်ချစွာ မိနစ်ပိုင်းအတွင်း ထုတ်ယူလို့ရပါတယ်ရှင့်"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
