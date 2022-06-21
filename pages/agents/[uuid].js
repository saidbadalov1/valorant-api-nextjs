import Head from "next/head";
import { useRouter } from "next/router";

export default function Uuid({ agent }) {
    console.log(agent.data)
    const router = useRouter()
    const { uuid } = router.query

    return (
        <>
        <Head>
            <title>{agent.data.displayName}</title>
        </Head>
            <div className="cont">
                <div className="image">
                    <img src={agent.data.bustPortrait} alt={agent.data.displayName} />
                </div>
                <div className="overlay">
                    <h1>{agent.data.displayName}</h1>
                    <p>{agent.data.description}</p>
                </div>

            </div>

            <style jsx>{`
            .cont{
                display: flex;
                align-items: center;
            }
            .overlay{
                padding: 100px;
            }
            p{
                font-size: 1.4rem;
                margin-top: 1rem;
                opacity: 60%;
            }
            img{
                margin-top: 90px;
                height: 550px;
                width: 500px;
                margin-left: px;
            }
            @media only screen and (max-width: 600px) {
                .cont{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                }
                img{
                    margin-left: 0px;
                    margin-top: 10px;
                    height: 490px;
                    width: 350px;
                }
            }
        `}</style>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const request = await fetch(`https://valorant-api.com/v1/agents/${params.uuid}`);
    const agent = await request.json()

    return {
        props: {
            agent
        }
    }
}
