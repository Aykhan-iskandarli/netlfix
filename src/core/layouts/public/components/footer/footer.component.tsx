import css from "./footer.module.scss";
import visa from "src/assets/images/visa.webp";
import master from "src/assets/images/mastercard.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer_container}>
         <div className="container">
        <div className="row">
          <ul className={css.footer_payment}>
            <li>
              <Image src={visa} alt="" />
            </li>
            <li>
              <Image src={master} alt="" />
            </li>
          </ul>
          <div className={css.footer_content}>
            <p>
              Registered Names and Trademarks are the copyright and property of
              their respective owners. Copyright © 2023 GAMESGO LIMITED (UNIT G1
              CAPITAL HOUSE 61 AMHURST ROAD LONDON UNITED KINGDOM E8 1LL) All
              Rights Reserved.
            </p>
            <div className={css.footer_content_privacy}>
                <Link href="/">Privacy Policy</Link>
              </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
