import Link from "next/link";

export default () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/agents">
                        <a>Agents</a>
                    </Link>
                    </li>
                </ul>
            </nav>

            <style jsx>{`
                .navbar{
                    width: 100%;
                    background-color: black;
                    top: 0;
                    position: sticky;
                }
                nav{
                    height: 60px;
                    display: flex;
                    align-items: center;
                    width: 90%;
                    margin: 0 auto;
                }
                ul{
                    display: flex;
                    gap: 20px;
                    list-style: none;
                }

                ul li a{
                    text-decoration: none;
                    color: #fff;
                    font-size: 20px;
                }
            `}</style>
        </div>
    );
}