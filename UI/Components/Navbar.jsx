import Link from "next/link";
import styled from "styled-components";


function Navbar() {
  return (
    <>
      <div>Navbar ahahah</div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>

      <Link href="/market">
        <a>Market</a>
      </Link>

      
    </>
  );
}

export default Navbar;
