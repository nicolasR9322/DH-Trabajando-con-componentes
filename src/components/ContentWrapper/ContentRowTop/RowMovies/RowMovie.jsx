import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  propTypes from 'prop-types';


export const RowMovie = ({titulo,borderColor,cifra,icon}) => {
    return(
        <>
						<div className="col-md-4 mb-4">
							<div className={`card border-left-${borderColor} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
										</div>
										<div className="col-auto">
											<FontAwesomeIcon icon={icon} className='fa-solid fa-2x text-gray-300' />
										</div>
									</div>
								</div>
							</div>
						</div>
						</>
    )
	
}

RowMovie.propTypes = {
	borderColor: propTypes.string.isRequired,
	titulo: propTypes.string.isRequired,
	cifra: propTypes.number.isRequired,
	icon: propTypes.any.isRequired
}

RowMovie.defaultProps = {
	borderColor: "success",
	titulo: "no hay titulo",
	cifra: 0,
	icon: "no hay icono",
}