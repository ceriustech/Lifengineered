import { supabase } from '../../../common/supabase';

const Article = (props) => {
	console.log(props);
	return <div>Article</div>;
};

export default Article;

export const getServerSideProps = async (ctx) => {
	let { data: article, error } = await supabase
		.from(ctx.query.category)
		.select('*')
		.eq('id', ctx.query.article)
		.single();
	if (error) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			article,
		},
	};
};
