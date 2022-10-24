import Link from "next/link";
import classes from "./BlogPostBlock.module.scss";

const BlogPostBlock = () => {
  return (
    <div className={classes["container"]}>
      <span className={classes["category"]}>Novosti</span>
      <Link href="/blog/kategorija/post">
        <a className={classes["image-link"] + " banner-link"}>
          <img
            src={
              "https://static.pexels.com/photos/111788/pexels-photo-111788-large.jpeg"
            }
            alt="test"
            className={classes["image-img"] + " banner-img"}
          />
          <div className={classes["image-overlay"]}></div>
        </a>
      </Link>
      <div className={classes["under-image"]}>
        <span className={classes["date"]}>11.03.2021</span>
        <Link href="/blog/kategorija/post">
          <a className={classes["post-heading-link"]}>
            <h4 className={classes["post-heading"]}>
              Uz Nintendo Switch konzolu uživajte u igrama gde god da se
              nalazite
            </h4>
          </a>
        </Link>
        <span className={classes["short-desc"]}>
          Želite da svoju omiljenu igru možete da igrate dok čekate red, tokom
          pauze na faksu ili poslu, kod kuće na velikom TV ekranu ili da društvu
          napolju pokažete do kog...
        </span>
        &nbsp;
        <Link href="/blog/kategorija/post">
          <a className={classes["more"]}>Više</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostBlock;
