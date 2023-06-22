import React from 'react';
import { RowMovie } from './RowMovies/RowMovie';
import { LastMovieDatabase } from './LastMovieDatabase/LastMovieDatabase';
import { GenresInDatabase } from './GenresInDatabase/GenresInDatabase';
import { faAward,faFilm,faUser } from '@fortawesome/free-solid-svg-icons'


export const ContentRowTop = () => {

	let metrics = [
		{
			titulo:"Movies in Data Base",
			borderColor:"primary",
			cifra:21,
			icon:faFilm 
		},
		{
			titulo:"Total Awards",
			borderColor:"success",
			cifra:79,
			icon:faAward
		},
		{
			titulo:"Users",
			cifra:49,
			icon:faUser,
			borderColor:"warning",
		}
	]


    return(
        <div id="content">
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					<div className="row">
					{metrics.map((metric,i) => {
						
					return (<RowMovie {...metric} key={i + metric.titulo}/>)
					})
					
				}
					</div>
					<div className="row">
						
						<LastMovieDatabase />

						<GenresInDatabase />
					</div>
				</div>
			</div>
    )
}

