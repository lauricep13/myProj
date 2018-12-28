import Dashboard from '@material-ui/icons/Dashboard';

// Core component views
import SellerList from 'views/Sellers/SellerList/SellerList.js';
import CreateSeller from 'views/Sellers/CreateSeller/CreateSeller.js';

const sellerRoutes = [
	{
		path: '/Sellers/Create',
		sidebarName: 'New Seller',
		icon: Dashboard,
		component: CreateSeller
	},
	{
		path: '/Sellers',
		sidebarName: 'Leads',
		icon: Dashboard,
		component: SellerList
	}
];

export default sellerRoutes;
