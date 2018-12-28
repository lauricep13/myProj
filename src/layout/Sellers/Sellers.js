import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import Footer from 'components/Footer/Footer.js';

import sellerRoutes from 'routes/Sellers/Sellers.js';

const switchRoutes = (
	<Switch>
		{sellerRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return (
				<Route
					path={prop.path}
					component={prop.component}
					exact={prop.exact}
					key={key}
				/>
			);
		})}
	</Switch>
);

class Sellers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
	}
	getRoute() {
		return this.props.location.pathname !== '/maps';
	}
	render() {
		const { classes, match, ...rest } = this.props;
		return (
			<Grid container>
				<Grid item xs={12}>
					<Header routes={sellerRoutes} {...rest} />
				</Grid>
				<Grid item xs={2}>
					<div
						style={{
							marginTop: 65,
							padding: '10px',
							height: 800,
							background: '#252222'
						}}
					>
						<Sidebar
							routes={sellerRoutes}
							logoText={'iTracker'}
							handleDrawerToggle={this.handleDrawerToggle}
							open={this.state.mobileOpen}
							color="blue"
							{...rest}
						/>
					</div>
				</Grid>
				<Grid item xs={10}>
					<div
						style={{
							marginTop: 65,
							padding: '10px',
							height: 800
						}}
					>
						{/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
						{this.getRoute() ? (
							<div>
								<div>{switchRoutes}</div>
							</div>
						) : (
							<div className={classes.map}>{switchRoutes}</div>
						)}
						{this.getRoute() ? <Footer /> : null}
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default Sellers;
