import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Hello <span>NextJS!</span></h1>
      </div>
      <style jsx>{`
      span{
        color: red;
      }
    `}</style>
    </>
  )
}
