import Head from "next/head";
import AgentList from "../../components/agentList";

export default ({ agents }) => {
    console.log(agents.data)
    return (
        <div className="agents">
            <Head>
                <title>Agents</title>
            </Head>
            <h1>
                AGENTS
            </h1>

            <AgentList agents={agents} />

            <style jsx>{`
                .agents{
                    margin: 20px 0px;
                }
                h1{
                    margin-bottom: 20px;
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
}

export async function getStaticProps() {
    const request = await fetch("https://valorant-api.com/v1/agents");
    const agents = await request.json()

    return {
        props: {
            agents
        }
    }
}