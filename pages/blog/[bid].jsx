
import classes from './Blog.module.scss';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { ApiHandler } from '../api/api';


const BlogPost = ({ blogpost }) => {
  console.log(blogpost)
  const router = useRouter()
  const desc = useRef(null)
  const { id } = router.query

  useEffect(() => {
    if (desc.current) {
      desc.current.innerHTML = blogpost.basic_data.description;
    }
  }, [blogpost]);

  return (
    <>
      <div className={classes.BlogPostHolder}>
        <div className={classes.titleHolder}>
          <h5>{blogpost.basic_data.title}</h5>
          <span className={classes.date}>{blogpost.basic_data.created_at.date_time}</span>
        </div>
        <div className={classes.imgHolder}>
          <img src={blogpost.images.thumb_image} alt={blogpost.basic_data.title} />
        </div>
        <div className={classes.txtHolder}>
          {blogpost.basic_data.description ? <p ref={desc}></p> : <p>Trenutno ne postoji opis za ovu vest.</p>}
        </div>
      </div>
    </>
  )
}

export default BlogPost

export const getServerSideProps = async (context) => {
  const api = ApiHandler()
  const { bid } = context.query

  return {
    props: {
      blogpost: (
        await api
          .get(`news/details/${bid}`)
          .then((response) => response?.payload)) ?? null,
    },
  }
}