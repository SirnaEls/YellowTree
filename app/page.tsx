import styles from "./page.module.css";
import Image from "next/image";
import "cal-sans";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.ellipseRight}
        src="/Ellipse1.png"
        alt="Photo de Nassir"
        width={444}
        height={444}
      />

      <svg
        className={styles.strokeRight}
        xmlns="http://www.w3.org/2000/svg"
        width="311"
        height="740"
        viewBox="0 0 311 1024"
        fill="none"
      >
        <path
          d="M1308.5 641.733C1308.5 977.212 1015.73 1249.23 654.5 1249.23C293.27 1249.23 0.5 977.212 0.5 641.733C0.5 473.977 93.1938 242.839 221.317 93.262C285.378 18.475 358.242 -35.8586 432.737 -51.733C507.176 -67.5956 583.335 -45.0757 654.101 34.0369C699.53 104.355 763.181 156.531 833.07 200.482C882.829 231.775 935.779 258.916 987.575 285.465C1008.53 296.204 1029.29 306.847 1049.58 317.628C1190.52 392.531 1308.5 474.156 1308.5 641.733Z"
          stroke="#FFD449"
        />
      </svg>
      <Image
        className={styles.ellipseLeft}
        src="/Ellipse2.png"
        alt="Photo de Nassir"
        width={444}
        height={444}
      />
      <svg
        className={styles.strokeLeft}
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="480"
        viewBox="0 0 490 691"
        fill="none"
      >
        <path
          d="M489.5 699C489.5 1034.48 196.73 1306.5 -164.5 1306.5C-525.73 1306.5 -818.5 1034.48 -818.5 699C-818.5 531.244 -725.806 300.106 -597.683 150.529C-533.622 75.7424 -460.758 21.4088 -386.263 5.53432C-311.824 -10.3282 -235.665 12.1916 -164.899 91.3042C-119.47 161.622 -55.819 213.798 14.0698 257.75C63.829 289.043 116.779 316.183 168.575 342.732C189.528 353.472 210.291 364.114 230.578 374.896C371.518 449.798 489.5 531.423 489.5 699Z"
          stroke="#FFD449"
        />
      </svg>
      <div className={styles.cardProfile}>
        <div className={styles.profileCard}>
          <Image
            src="/nassirpdp.png"
            alt="Photo de Nassir"
            width={76}
            height={76}
            style={{ borderRadius: 20 }}
          />
          <h1>Nassir El Abbassi</h1>
        </div>
        <div className={styles.description}>
          <p>UI Designer & Webflow Developer </p>
        </div>
        <ul className={styles.socialCards}>
          <Link href="https://twitter.com/nassirpsd" target="_blank">
            <li>
              <Image
                src="/iconmonstr-twitter-1.svg"
                alt="Logo Twitter"
                width={40}
                height={40}
              />
              Twitter
              <Image
                src="/iconmonstr-angel-right-circle-thin.svg"
                alt="icone fleche"
                width={24}
                height={24}
                style={{ borderRadius: 20 }}
              />
            </li>{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/nassir-el-abbassi-066a3b141/"
            target="_blank"
          >
            <li>
              <Image
                src="/iconmonstr-linkedin-1.svg"
                alt="Logo LinkedIn"
                width={40}
                height={40}
              />
              LinkedIn
              <Image
                src="/iconmonstr-angel-right-circle-thin.svg"
                alt="icone fleche"
                width={24}
                height={24}
                style={{ borderRadius: 20 }}
              />
            </li>
          </Link>
          <Link href="https://www.instagram.com/nassirpsd/" target="_blank">
            <li>
              <Image
                src="/iconmonstr-instagram-11.svg"
                alt="Logo Instagram"
                width={40}
                height={40}
              />
              Instagram
              <Image
                src="/iconmonstr-angel-right-circle-thin.svg"
                alt="icone fleche"
                width={24}
                height={24}
                style={{ borderRadius: 20 }}
              />
            </li>
          </Link>
          <Link href="https://nassirels.webflow.io/" target="_blank">
            <li>
              <Image
                src="/iconmonstr-globe-thin.svg"
                alt="logo globe site web"
                width={40}
                height={40}
              />
              My Website
              <Image
                src="/iconmonstr-angel-right-circle-thin.svg"
                alt="icone fleche"
                width={24}
                height={24}
                style={{ borderRadius: 20 }}
              />
            </li>
          </Link>
        </ul>
      </div>
      <div></div>
    </main>
  );
}
