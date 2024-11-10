import Link from "next/link";
export default function Footer(){
    return(
        <header style={{backgroundColor: "gray"}}>    
            <div>Copyright 2024 |</div>
            <Link href="www.facebook.com">Facebook</Link> <br />
            <Link href="www.instagram.com">Instagram</Link> <br />
            <Link href="www.merchandise.com">Our Merchandise</Link>
        </header>
    )
}