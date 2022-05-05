import styles from '../styles/Home.module.css'

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: 'John Doe',
      age: '30',
    }
    let res = await fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(t => t.json());
    // console.log(res);
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>click</button>
    </div>
  )
}