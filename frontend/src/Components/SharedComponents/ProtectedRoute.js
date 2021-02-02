import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({isAuth: isAutho, component: Component, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAutho) {
					return <Component {...rest}/>;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.location },
							}}
						/>
					);
				}
			}}
		/>
	);
}

export default ProtectedRoute;
