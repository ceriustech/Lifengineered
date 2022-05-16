import { useEffect } from 'react';
import { supabase } from '../../common/supabase';

const Category = (props) => {
	console.log(props);
	return <div>Category</div>;
};

export default Category;

export const getServerSideProps = async (ctx) => {
	let { data: category, error } = await supabase
		.from(ctx.query.category)
		.select('*');
	if (error) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			category,
		},
	};
};
