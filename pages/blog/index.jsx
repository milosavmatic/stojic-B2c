import classes from "./BlogPage.module.scss";
import BlogPostBlock from "../../components/blog/blogPostBlock/BlogPostBlock";
// import blogBanner from "../assets/images/banners/blog-banner.png";

const BlogPage = () => {
  return (
    <>
      {/* <img src={blogBanner} className={classes['head-banner']} alt='head'/> */}
      <div className={classes["blog-posts"] + " row"}>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
        <div
          className={classes["post-container"] + " col-12 col-sm-6 col-xl-4"}
        >
          <BlogPostBlock />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
