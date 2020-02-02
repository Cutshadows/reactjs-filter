# Clonar el código de GitHub

 En esta clase vamos a comenzar clonando el código del proyecto del repositorio en GitHub.

Es importante que tú y yo tengamos un punto de partida en común. Así vamos a poder asegurarnos que cada cambio que yo haga en el código, tú también lo recibas.

Para hacer esto, en la terminal ve a una carpeta donde quieras que exista el proyecto. Entonces escribes lo siguiente:

># $ git clone https://github.com/Sparragus/platzi-badges.git
Eso va a clonar el repositorio del curso a una carpeta llamada platzi-badges.

Ahora es necesario que te muevas a esa carpeta.

># $ cd platzi-badges
Ahora necesitamos instalar todas las dependencias necesarias para poder correr el proyecto. Lo haremos utilizando npm.

># $ npm install
Este proceso puede tardar un poco. Lo que esta haciendo es descargando todas las bibliotecas de código que el proyecto necesita.

Una vez haya concluido, estamos listos para echar a correr el servidor. Lo hacemos con el comando

># $ npm run start
Cuando el servidor comience, automáticamente va a abrir una pantalla en el navegador con la aplicación.

Si todo salió bien, vas a ver una pantalla que dice “Hello, Platzi Badges”.

En la próxima clase vas a aprender como fue que “Hello, Platzi Badges” llegó desde el código hasta la pantalla de tu navegador.

># *Aquí encuentras el repositorio.


JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando
sus atributos o props
y el children que es el contenido.
Ejemplo:
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

# react es javascript

> Primer paso del ciclo de vida de un componente **"Montaje"**

> Cuando los compenentes se actualizan se ejecuta el **Render** generando el nuevo **DOM** la cual envia una confirmacion que se llama **componentDidUpdate()** si nos movemos de pagina muchos componentes que se veian van a desaparecer la cual envia una señal que se llama **componentWillUnmount()** eliminando el codigo de **DOM**

> Unidad Basica 

> Se puede imporar css desde un **global, className o instalando Bootstrap** 

# Props
## Props pequeños argumentos a nuestros componentes para poder cambiar estados 


## Paginas siguen siendo componentes Un componente que adentro va a tener mas componentes

## evento que se ejecuta en el tipo de input text con evento onChange pasando parametro el evento
>`handleChange=(e)=>{
console.log({value:e.target.value});
}`


## el boton igual tiene un evento por efecto viene como type submit
 > **type="button"** se puede cambiar en la propiedad del boton o en el evento **handleSubmit =e=>{
     e.preventDefault();
 }**


# Manejo de estado

` handleChange=(e)=>{
        /* console.log({
            name:e.target.name,
            value:e.target.value
        }); */
        this.setState({
            [e.target.name]: e.target.value,
            //firstName: e.target.value,

        })
    }`


    `value={this.state.lastName}` 

### al momento de cargar hay que iniciarlizar el estado con objeto vacio


# Levantar el estado
poner el estado en una localizacion donde se le pueda pasar como props por componentes

### luego de declarar un state con form vacio objeto [primera Forma]

> `const nextForm=this.state.form;` primera forma para hacer una abstraccion de valores
> `nextForm[e.target.name]=e.target.value;` primera forma con esto el valor no cambia


### segunda forma 

>`this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
})`

# React Router

># Multi Page Apps
    cada pagina implica una peticion al servidor

># Single Page Apps
    Aplicaciones que cargan una sola pagina de **HTML** y cualquiera actualizacion la hacen re-escribiendo el HTML que ya tenia

># React Router(v4)
    * Nos da las herramientas para poder hacer SPA facilmente
    * Usaremos 4 componentes
        *BrowserRouter
        *Route
        *Switch
        *Link

### react router libreria open source

# \<BrowserRouter></BrowserRouter>
se coloca en lo mas alto del codigo del return y todo lo que esta dentro va a funcionar como single page app si usamos componentes fuera del browserRouter no van a funcionar


#   \<Router />
representa una direccion de internet
Valor PATH="/"
valor Component={Home}}

cuando hay match con el path se hace render del componente
el componente va a recibir tres props:match, history, location


#   \<Switch />
Dentro de Switch solamente van elementos de Route
Switch se asegura que solamente un Route se renderea

# \<Link />

Toma el lugar del elemento  \<a>
Evita que se recargue la pagina completamente
Actualiza la URL

> `npm install react-router-dom --save`

>Cuando no se tiene metodo declarado o cuando no se usa estado se puede crear una funcion

> \<React.Fragment> es una herramienta es imaginario es para evitar div innecesarios

Aquí encuentras el archivo para hacer el reto que propone el profesor al final de la clase

React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.


>Cuando **React** renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

**Montaje**:
Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.


**Actualización**:
Ocurre cuando los props o el estado del componente cambian.
se aplica a todo componente descendiente de nuestro componente

Se llaman dos métodos: render, componentDidUpdate.

>**componentDidUpdate** recibe dos argumentos (props anteriores y el estado anterior) sirve para comparar versiones

**Desmontaje**:
Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

componentWillUnmount cuando sales del componente para limpiar memoria timeout o intervalos


cuando en el **componentDidMount** ocurre algo que cambia el state vuelve a llamar al **render** para actualizar la informacion 


## Cuando el componente se actualiza podemos a traves de **componentDidUpdate** ver el cambio y comparar el state y props inicial con el actualizado 

componentDidUpdate(prevProps, prevState){
        console.log('5, componentDidUpdate');
        console.log({
            prevProps:prevProps, prevState:prevState
        })
        console.log({
            props:this.props,
            state:this.state
        })

    }

## Limpieza de recursos para liberar el componente y no siga consumiendo memoria 
componentWillUnmount(){
        //momento preciso cuando se esta saliendo del componente
        console.log('6. componentWillUnmount')
        clearTimeout(this.timeoutId)
    }

# Llamadas a Api
cada llamada a una api consta de 3 estados **Loading** (la peticion se envia), **Error** (respuesta error) y **Datos** (respuesta datos).

**Datos Vacios** mensaje no hay datos
**Con Datos** 

Patron para obtener datos.

>this.props.history.push('/badges'); una vez cumpliendose la sentencia me redirige a la direccion que le asigno en el navegador

> this.props.match.params.badgeId para acceder al badge id que quiero acceder

> podriamos usar sockets pero es demaciado **overkill** para este proyecto

> Polling consiste en que cada cierto tiempo que es definido por nosotros se buscan los datos y se actualizan automáticamente. Esto se hará constantemente hasta que el usuario se vaya de la página.

> Portales
Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.


>Tenica de composicion 

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