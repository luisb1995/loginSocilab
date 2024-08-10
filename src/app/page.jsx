import Image from "next/image";
import Login from "@/components/login";
import styles from "./page.module.css";
import "./globals.css"


export default function Home() {
  return (
    <main className={styles.main}>
        <Login/>  
    </main>
  );
}
