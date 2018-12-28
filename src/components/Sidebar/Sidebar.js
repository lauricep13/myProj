import React from 'react';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// core components
import sidebarStyle from '../../assets/jss/Components/sidebarStyle.jsx';

const Sidebar = ({ ...props }) => {
	const { routes } = props;

	return (
		<List>
			{routes.map((route, index) => {
				return (
					<NavLink to={route.path} key={index}>
						<ListItem>
							<ListItemText primary={route.sidebarName} />
						</ListItem>
					</NavLink>
				);
			})}
		</List>
	);
};

export default withStyles(sidebarStyle)(Sidebar);
