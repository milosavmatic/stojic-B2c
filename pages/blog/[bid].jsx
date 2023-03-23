import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import classes from './Blog.module.scss';
import { ApiHandler } from '../../helpers/api';

const Seo = dynamic(() => import('../../components/Seo/Seo'));

const BlogPost = ({ blogpost }) => {
	console.log(blogpost);
	const router = useRouter();
	const desc = useRef(null);
	const { id } = router.query;

	console.log('kjk', process.env.BASE_URL);

	useEffect(() => {
		if (desc.current) {
			desc.current.innerHTML = blogpost.basic_data.description;
		}
	}, [blogpost]);

	return (
		<>
			<Seo
				title={`${blogpost.basic_data.title}`}
				description={`${blogpost.basic_data.short_description}`}
				ogtitle={`${blogpost.basic_data.title}`}
				ogdescription={`${blogpost.basic_data.short_description}`}
				ogimage={`${blogpost.images.thumb_image}`}
				ogurl={`${process.env.BASE_URL}${blogpost.id}`}
			/>
			<div className={classes.BlogPostHolder}>
				<div className={classes.titleHolder}>
					<h5>{blogpost.basic_data.title}</h5>
					<span className={classes.date}>{blogpost.basic_data.created_at.date_time}</span>
				</div>
				<div className={classes.imgHolder}>
					<Image src={blogpost.images.thumb_image} alt={blogpost.basic_data.title} layout="fill" priority />
				</div>
				<div className={classes.txtHolder}>
					{blogpost.basic_data.description ? <p ref={desc} /> : <p>Trenutno ne postoji opis za ovu vest.</p>}
				</div>
			</div>
		</>
	);
};

export default BlogPost;

export const getStaticPaths = async () => {
	const api = ApiHandler();
	const blog = (await api.list('news/category/list/all').then((response) => response?.payload.items)) ?? null;

	const paths = blog.map((blogpost) => ({
		params: { bid: blogpost.id.toString() },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async (context) => {
	const api = ApiHandler();
	const { bid } = context.params;

	return {
		props: {
			blogpost: (await api.get(`news/details/${bid}`).then((response) => response?.payload)) ?? null,
		},
	};
};
