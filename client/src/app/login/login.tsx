import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getConnecting} from 'logic/session/session-selectors'
import {login} from 'logic/session/session-actions'
import css from './login.module.css'
import TcgLogo from 'components/tcg-logo'
import LinkContainer from 'components/link-container'

function Login() {
	const dispatch = useDispatch()
	const connecting = useSelector(getConnecting)

	const handlePlayerName = (ev: React.SyntheticEvent<HTMLFormElement>) => {
		ev.preventDefault()
		const name = ev.currentTarget.playerName.value.trim()
		if (name.length > 0) dispatch(login(name))
	}

	return (
		/* Background Image */
		<div className={css.loginBackground}>
			<div className={css.loginContainer}>
				<TcgLogo />
				{connecting ? (
					<div className={css.connecting}>Connecting...</div>
				) : (
					<>
						<form onSubmit={handlePlayerName}>
							<input
								maxLength={25}
								name="playerName"
								placeholder="Player name..."
								autoFocus
							/>
							<button>Next</button>
						</form>
					</>
				)}
				<LinkContainer />
			</div>
		</div>
	)
}

export default Login
