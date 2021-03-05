
import DeleteButton from '../DeleteButton';

const Cards =({article , refreshList, postList}) => {

	return (
		<li className="card">
			<div className="card-header">
				<p>{article.title}</p>
				<DeleteButton article={article} refreshList={refreshList} postList={postList}/>
			</div>
			<div className="card-body">{article.content}</div>
		</li>
	)
}

export default Cards;