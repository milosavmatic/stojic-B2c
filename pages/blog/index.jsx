import { useState, useCallback, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { ApiHandler } from '../api/api';
import classes from './Blog.module.scss';
import { BsArrowRight } from 'react-icons/bs';


const perPage = 5

const Blog = ({ blog }) => {
  console.log(blog)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({})

  const handleData = useCallback(async (page, perPage) => {
    try {
      const response = await getShortAktuelnosti(page, perPage)
      if (!response.data.success) {
        throw new Error('Stranica nije pronadjena!')
      }
      setPagination(response.data.payload.pagination)

      setData(response.data.payload.items)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  useEffect(() => {
    handleData(page, perPage)
  }, [page, handleData])


  return (
    <div className={classes.blogHolder}>
      <div className={classes.titleHolder}>
        <h5>Blog</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
      </div>
      <div className={classes.contentHolder}>
        <Row>
          {blog?.map((row) => {
            return (
              <Col xl={3} md={6} sm={6} xs={12} key={row?.id}>
                <Link href={`/blog/${row?.id}`}>
                  <a>
                    <div className={classes.postHolder} id={row.id}>
                      <div className={classes.imgHolder}>
                        <img src={row.images.thumb_image} alt={row.title} />
                      </div>
                      <div className={classes.txtHolder}>
                        <h5>{row.basic_data.title ? row.basic_data.title : "/"}</h5>
                        <span className={classes.date}>{row.basic_data.created_at.date_time}</span>
                        <p>{row.basic_data.short_description ? row.basic_data.short_description : "/"}</p>
                        <span className={classes.more}>Pročitajte više <BsArrowRight /></span>
                      </div>
                    </div>
                  </a>
                </Link>
              </Col>
            )
          })}

        </Row>
      </div>
    </div>
  )
};

export default Blog;

export const getServerSideProps = async (context) => {
  const api = ApiHandler()

  return {
    props: {
      blog: (
        await api
          .list('news/category/list/all')
          .then((response) => response?.payload.items)) ?? null,
    },
  }
}