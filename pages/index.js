import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import Weather from "../components/content";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <Weather />;
}
