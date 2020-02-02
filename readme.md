# FILTER SEARCH REACTJS WITH HOOKS

![Demostration](https://github.com/Cutshadows/reactjs-filter/blob/master/reactjs-filter-hooks.gif)

# HOOKS

Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado Hooks que permite que las funciones también tengan features que solamente tienen las clases.

Hooks: Permiten a los componentes funcionales tener características que solo las clases tienen:

useState: Para manejo de estado.
useEffect: Para suscribir el componente a su ciclo de vida.
useReducer: Ejecutar un efecto basado en una acción.
Custom Hooks: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).

useState regresa un arreglo de dos argumentos.


>### useState
esta funcion la vamos a llamar cuando nuestro componente funcional quiera cambiar su estado

>### useEffect
nos va a permitir subscribirnos a ciclo de vida cuando queremos que nuestro componentes se ejecute antes del ciclo de vida 

>### useReducer
nos va a permitir tomar acciones basados en otras acciones es un conjunto limitado de todos los hoojs

## Custom Hooks
Usamos los hooks fundamentales para crear nuevos hooks custom
por nomenclatura se le designa a cada **custom hooks** un nombre **'USE'** antes del hooks creado por nosotros 
regla #2 > un hooks nunca se va a poder ejecutar condicionalmente esto quiere decir que podemos decir if y adentro ejecutar el hooks


> utilizacion de hooks en un filtro de busqueda Optimizado y lazy

`function useSearchBadges(badges){
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
}`
