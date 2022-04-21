import styles from '../styles/Home.module.css'

export default function Home({str}) {
  return (
    <div className={styles.container}>
      {str}
    </div>
  )
}

export const getStaticProps = async () => {
  let str = process.env.TEST;
  return {
    props: {
      str
    }
  }
}
