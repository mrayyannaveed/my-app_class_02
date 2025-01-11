import Link from "next/link"

export default function Navbar(){
    return(
        <nav style={{display: "flex", justifyContent: "space-between", backgroundColor: "Blue"}}>
            <img src="https://th.bing.com/th/id/OIP.g_Az_eiBN82wtCHlgESAkgHaE3?rs=1&pid=ImgDetMain" alt="" height="50px"/>
            <ul style={{display: "flex", gap: "40px", marginRight: "40px"}}>
                <li style={{listStyle: "none"}}><Link href="/" style={{color: "white", textDecoration: "none"}}>Home</Link></li>
                <li style={{listStyle: "none"}}><Link href="/about" style={{color: "white", textDecoration: "none"}}>Abouts</Link></li>
                <li style={{listStyle: "none"}}><Link href="/products" style={{color: "white", textDecoration: "none"}}>Products</Link></li>
                <li style={{listStyle: "none"}}><Link href="/contact" style={{color: "white", textDecoration: "none"}}>Contacts</Link></li>
            </ul>
        </nav>
    )
}