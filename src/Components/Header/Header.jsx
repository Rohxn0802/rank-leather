import Image from "next/image";
import Link from "next/link";
import Logo from "../../Assets/img/rank-nobg.png";

function Header() {
  return (
    <header>
      <div className="h-block-one">
        <Link href="/">
          <Image src={Logo} alt="RANK-LEATHER" height={500} width={500} />
        </Link>
      </div>
      <div className="h-block-two">
        <ul>
          <li>BLOGS</li>
          <li>CATALOGUE</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
