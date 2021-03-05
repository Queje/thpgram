import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const DeleteButton = ({article, refreshList, postList}) => {
    const getCurrentUser = (state) => state;
	const {id, islogged} = useSelector(getCurrentUser);

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
        <>
            { (islogged === true) && (article.user_id) === (id) &&
                <button className="btn btn-sm btn-outline-warning" onClick={() => handleDelete(article.id)}>
                    delete
                </button>
            }
        </>
    )
}

export default DeleteButton;
