import React from 'react';
import './Collection.css';


const Collection = ( props ) => {
	const collectionCoverStyle = {
		backgroundImage: 'url(' + props.cover + ')'
	};

	const collectionThumbnailTop = {
		backgroundImage: 'url(' + props.topThumbnail + ')'
	};

	const collectionThumbnailBottom = {
		backgroundImage: 'url(' + props.bottomThumbnail + ')'
	};
	
	const style = {
		float: props.float,
	};
	
	const collectionRow = 'Collection ' + props.classCSS;

	return (
		<div className= {collectionRow} style= {style} id= {props.id}>
			<div style= {collectionCoverStyle} className='coverCollection'> 
				<p className='collectionTile'>{props.collectionName}</p> 
			</div>
			<div style={collectionThumbnailTop} className='collectionThumbnailTop'> </div>
			<div style={collectionThumbnailBottom} className='collectionThumbnailBottom'> </div>
		</div>
	);
};

export default Collection;
