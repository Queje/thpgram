import { useState } from "react";
import { useEffect } from "react";
import Cards from '../../components/Cards';

const Home =() => {
	const [postList, setPostList]= useState('');
		
	const getPostList = () => {
		fetch(`http://localhost:3000/articles`, {
				method: 'get',
				headers: {
					'Content-Type': 'application/json'
				},
			})
				.then((response) => response.json())
				.then ((response) => {
					console.log(response)
					setPostList(response)
				})
	}


	useEffect(()=>{getPostList()},[]);
		
	return(
		<>
					<h1>Thpgram</h1>
					<p>This is a rails api and react front instagram like website.</p>
					<section>
						<h2>What's up people?</h2>
							{(postList) &&
								<ul className="cardlist"> 
									{
										postList.map((article) => (
											<Cards article={article} key={article.id} refreshList={setPostList} postList={postList}/>
										))
									}
								</ul>
							}
					</section>
		</>
	)
}

export default Home;