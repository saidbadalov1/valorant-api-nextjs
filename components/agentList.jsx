import Link from "next/link";
import { useRouter } from "next/router";

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export default ({agents}) => {

    const router = useRouter()
    const { uuid } = router.query
    const uniqueAgents = agents?.data?.length ? getUniqueListBy(agents?.data, 'displayName') : [];
    return (
        <div className="face">
            {uniqueAgents.map(agent => (
                <Link key={agent.uuid} href={`agents/${agent.uuid}`}>
                    <div className="agents" id={agent.uuid} key={agent.uuid}>
                        <h3>{agent.displayName}</h3>
                        <p>{agent.description}</p>
                        <img src={agent.bustPortrait} alt={agent.displayName} />
                    </div>
                </Link>
            ))}

            <style jsx>{`
                .face{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                }
                p{
                    height: 100px;
                    width: 200px;
                    opacity: 0%;
                    position: absolute;
                    margin-top: 25px;
                }
                .agents{
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgb(206, 206, 206);
                    text-align: center;
                    cursor: pointer;
                    border-radius: 5px;
                }
                img{
                    width: 200px;
                    height: 200px;
                    margin-top: 10px;
                }
                #ded3520f-4264-bfed-162d-b080e2abccf9{
                    
                }
            `}
            </style>
        </div>
    );
}