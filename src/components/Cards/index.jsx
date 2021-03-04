// import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const Cards =({article , refreshList, postList}) => {
	// const getCurrentUser = (state) => state;
	// const {id} = useSelector(getCurrentUser);

	const handleDelete =(articleID) => {
		fetch(`http://localhost:3000/articles/${articleID}`, {
			method: 'delete',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`, 
				'Content-Type': 'application/json'
			},
		})
		.then((response) => response.json())
		.then ((response) => {
			const newList = postList.filter((e) => e.id !== response.id);
			refreshList(newList);
    })
	}

	return (
		<li className="card">
			<div className="card-header">
				<p>{article.title}</p>
				<button className="btn btn-sm btn-outline-warning" onClick={() => handleDelete(article.id)}>
					delete
				</button>
			</div>
			<div className="card-body">{article.content}</div>
		</li>
	)
}

export default Cards;