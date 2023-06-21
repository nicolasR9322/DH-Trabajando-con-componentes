import React from 'react';
import { RowMovie } from './RowMovies/RowMovie';
import { LastMovieDatabase } from './LastMovieDatabase/LastMovieDatabase';
import { GenresInDatabase } from './GenresInDatabase/GenresInDatabase';

export const ContentRowTop = () => {
    return(
        <div id="content">
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					<RowMovie />
					
	
					<div className="row">
						
						<LastMovieDatabase />

						<GenresInDatabase />
					</div>
				</div>
			</div>
    )
}