import Link from "next/link";
import classes from "./BlogHeader.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Blog header layout component of B2C.
 *
 * @author Aleksandar Ječmenić <jecmenic.aleksandar@croonus.com>
 */
const BlogHeader = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header-top"]}>
        <Link href="/">
          <a>STOJIC ELEKTRIK SHOP</a>
        </Link>
      </div>
      <div className={classes["header-middle"]}>
        <Link href="/blog" className={classes["header-middle-link"]}>
          <img
            src={"/images/logo/logo-blog-s.png"}
            alt="blog-logo"
            className={classes["blog-logo"]}
          />
        </Link>
        <button className={classes["mobile-hamburger"]}>
          <FontAwesomeIcon
            icon={faBars}
            className={classes["mobile-hamburger-icon"]}
          />
        </button>
      </div>
      <div className={classes["header-bottom"]}>
        <ul className={classes["categories"]}>
          <li>
            <Link href="/blog/novosti">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                NOVOSTI
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/it-kutak">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                IT KUTAK
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/super-domacinstvo">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                SUPER DOMAĆINSTVO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/telefoni">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                TELEFONI
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/tv-audio">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                TV & AUDIO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/zdravlje-i-nega">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                ZDRAVLJE I NEGA
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/zivot-plus">
              <a
                className={({ isActive }) =>
                  classes["category-link"] +
                  (isActive ? ` ${classes["category-link-active"]}` : "")
                }
              >
                ŽIVOT PLUS
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default BlogHeader;
