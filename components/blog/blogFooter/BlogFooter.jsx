import classes from "./BlogFooter.module.scss";

const BlogFooter = () => {
  return (
    <footer className={classes["footer"]}>
      <p className={classes["footer-copyright"]}>
        &copy; 2022 Stojić Elektrik | Sva prava zadržana. Powered by{" "}
        <a
          className={classes["croonus-link"]}
          rel="noreferrer"
          href="https://www.croonus.com/"
          target="_blank"
        >
          Croonus Technologies
        </a>
        .
      </p>
    </footer>
  );
};

export default BlogFooter;
