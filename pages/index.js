import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [zIndex1, setZIndex] = useState(["auto", "auto", "auto", "auto", "auto"]);
  const click1 =()=>{
    const arr = zIndex1;
    if(arr[0] === "auto"){
      arr[0] = 1
    }else{
      arr[0] = "auto"
    }
    setZIndex([...arr]);
  }
  const click2 =()=>{
    const arr = zIndex1; 
    if(arr[1] === "auto"){
      arr[0] = 1;
      arr[1] = 1; 
    }
    else{
      arr[0] = "auto"
      arr[1] = "auto"
    }
    setZIndex([...arr]);
  }
  const click3 =()=>{
    const arr = zIndex1;
    if(arr[2] === "auto"){
      arr[2] = 1;
    }else{
      arr[2] = "auto";
    }
    setZIndex([...arr]);
  }


  const click4 =()=>{
    const arr = zIndex1;
    if(arr[3] === "auto"){
      arr[2] = 1;
      arr[3] = 1; 
    }
    else{
      arr[2] = "auto"
      arr[3] = "auto"
    }
    setZIndex([...arr]);
  }
  const click5 =()=>{
    const arr = zIndex1;
    if(arr[4] === "auto"){
      arr.fill(1);
      arr[4]= 0;
    }
    else{
      arr.fill("auto");
    }
    setZIndex([...arr]);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Box Model</title>
      </Head>
      
        <div className = {styles.main1}>
          <div 
            id={styles.box} 
            style={{zIndex: `${zIndex1[0]}`}}
            onClick={click1}
          >
            1
          </div>
          <div
            id={styles.box}
            style={{zIndex: `${zIndex1[1]}`}}
            onClick={click2}
          >
            2
          </div>
        </div>
        <div
          id={styles.box5}
          style={{zIndex: `${zIndex1[4]}`}}
          onClick={click5}
        >
          5
        </div>
        <div className = {styles.main2} >
          <div
            id={styles.box}
            style={{zIndex: `${zIndex1[2]}`}}
            onClick={click3}
          >
            3
          </div>
          <div
            id={styles.box}
            style={{zIndex: `${zIndex1[3]}`}}
            onClick={click4}
          >
            4
          </div>
        </div>    
    </div>
  )
}
