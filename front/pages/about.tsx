import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import MinimalLayout from '@/layouts/minimal';

const About: NextPage = () => {
  return (
      <MinimalLayout title="About test">
        <div className={styles.container}>
          <main className={styles.main}>
            About
          </main>
        </div>
      </MinimalLayout>
  )
}

export default About
