import React from 'react';
import './Collection.css';


const Collection = (props) => {
	const collectionCoverStyle = {
		backgroundImage: 'url(https://images.unsplash.com/photo-1512526825361-0918f33a9fca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f07dacb0ea13892f056f96625e3bbb2&auto=format&fit=crop&w=1336&q=80)',
	};
	
	const collectionThumbnailTop = {
		backgroundImage: 'url(https://images.unsplash.com/photo-1521904890966-9ef1cc54e241?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=791fbaa6aba59d309e61004e6f590786&auto=format&fit=crop&w=800&q=80)'
	};
	
	const collectionThumbnailBottom = {
		backgroundImage: 'url(https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc77b626bf5cd59a31f9cef342d4a6bb&auto=format&fit=crop&w=1500&q=80)'
	};
	
	return (
		<div className='Collection'>
			<div style={collectionCoverStyle} className='coverCollection'> 
				<p className='collectionTile'>{props.collectionName}</p> 
			</div>
			<div style={collectionThumbnailTop} className='collectionThumbnailTop'> </div>
			<div style={collectionThumbnailBottom} className='collectionThumbnailBottom'> </div>
		</div>
	);
};

export default Collection;
