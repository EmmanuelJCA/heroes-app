import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

	const navigate = useNavigate()
	const location = useLocation()
	
	const { q = '' } = queryString.parse ( location.search )
	const heroes = getHeroesByName( q )

	const showSearch = (q.length === 0)
	const showError = (q.length > 0) && heroes.length === 0

	const { searchText, onInputChange } = useForm({
		searchText: q
	})


	const onSearchSubmit = (event) => {
		event.preventDefault()

		if( searchText.trim().length <= 1 ) return 

		navigate(`?q=${ searchText }`)
	}

	return (
		<>
			<h1>Buscar</h1>
			<hr />

			<div className="row animate__animated animate__fadeIn">
				<div className="col-5">
					<h4>Busqueda</h4>
					<hr />

					<form onSubmit={ onSearchSubmit }>
						<div className="input-group mb-3">
							<input 
								type="text" 
								placeholder="Busca un heroe" 
								className="form-control" 
								name="searchText"
								autoComplete="off"
								value={ searchText }
								onChange={ onInputChange }
							/>

							<button 
								className="btn btn-outline-primary"
							>
								Buscar
							</button>
						</div>
					</form>
				</div>

				<div className="col-7">
					<h4>Resultados</h4>
					<hr />

					<div 
						className="alert alert-primary"
						style={{ display: showSearch ? '' : 'none' }}
					>
						Busca un heroe
					</div>
					<div 
						className="alert alert-danger animate__animated animate__fadeInUp"
						style={{ display: showError ? '' : 'none'}}
					>
						No hay resultados para { q }
					</div>

					{
						heroes.map( hero => (
							<HeroCard key={ hero.id } { ...hero } />
						))
					}
				</div>
			</div>


		</>
	)
}
