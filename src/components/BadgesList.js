import React from 'react';
import tw__logo from '../imgs/twitter.png';
import icon_pais from '../imgs/chile_icon.svg';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gavatar from './Gavatar';


function BadgesListItem(props){
//class BadgesListItem extends React.Component{
	//render(){
		const {badge}= props;
		return(
			<div>
				 <Gavatar className="Badge__avatar-list" avatar={badge.avatarUrl} />
					<div>
						{badge.firstName} {badge.lastName}
						<br/>
						{badge.jobTitle}
						<br/>
							<img src={tw__logo} alt="" className="tw__logo"/>
							<span className="twitter__blue_font">{badge.twitter}</span>
							<img src={icon_pais} alt="" className="pais" width="25px"/>
					</div>
			</div>
		)
	//}
}

function useSearchBadges(badges){
	const [query, setQuery]=React.useState('');
	const [filteredBadges, setFilterResults]=React.useState(badges);
	 React.useMemo(()=>{
		const result=badges.filter(badge=>{
			return `${badge.firstName} ${badge.lastName}`
			.toLowerCase()
			.includes(query.toLowerCase());
			//este tipo de filtros es un poco costoso cuando son miles de datos potencial cuello de botella
			//useMemo recibe como primer argumento una funcion
			// segundo elemento que recibe es una lista que si el argumento esta guardado te la devuelve sino te la crea por primera vez
		});
		setFilterResults(result);
	}, [badges, query]	);
	return {query, setQuery, filteredBadges}
}


function BadgesList(props){
	const badges=props.badges;
	const {query, setQuery, filteredBadges}=useSearchBadges(badges);
		if(filteredBadges.length===0){
			return(
				<div>
					<div className="form-group">
						<label > Filter Badges </label>
						<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e)=>{
							setQuery(e.target.value)
						}}/>
					</div>
					<h3> No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create new badge
					</Link>
				</div>
			)
		}
        return(
			<div>
			<div className="form-group">
				<label > Filter Badges </label>
				<input
				type="text"
				className="form-control"
				value={query}
				onChange={(e)=>{
					setQuery(e.target.value)
				}}/>
			</div>
			<ul className="list-unstyled">
                    {filteredBadges.map(badge=>{
                        return(
							<li key={badge.id} className="Badge__section-name-list">
								<Link
								className="text-reset text-decoration-none"
								to={`/badges/${badge.id}`} >
									<BadgesListItem badge={badge} />
								</Link>
							</li>
                        )
                    })}
			</ul>
			</div>
        )
}
export default BadgesList
