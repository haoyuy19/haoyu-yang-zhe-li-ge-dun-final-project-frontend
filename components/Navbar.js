import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </head>
            <ul>
                <li><Link href = '/'><a>Home</a></Link></li>
                <li><Link href = '/search'><a>Search</a></Link></li>
                <li><Link href = '/profile'><a>Profile</a></Link></li>
            </ul>
            <style jsx>{`
             ul {
                 display: flex;
                 list-style: none;
                 background: white;
             }
             li {
                margin: 18px;
                font-size: 20px;
             }
            `}
            </style>
        </div>

    )
    
}

export default Navbar;