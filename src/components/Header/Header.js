import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
// @material-ui/icons

function Header(props) {
	return (
		<AppBar>
			<Toolbar>
				<div>
					<Button color="inherit" href="/Dashboard">
						iTracker
					</Button>
					<Button color="inherit" href="/Sellers">
						Sellers
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
