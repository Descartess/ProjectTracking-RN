import { TabNavigator } from 'react-navigation';
import ProjectDetail from '../../Components/projects/ProjectDetail';
import ProjectOverview from '../../Components/projects/ProjectOverview';


const ProjectDetailNavigator = TabNavigator(
	{
		Overview: { screen: ProjectOverview },
		Detail: { screen: ProjectDetail },
	},
	{
	tabBarOptions: {
		showLabel: true,
		style: {
			backgroundColor: 'white',
		},
		labelStyle: {
			color: 'black'
		},
		indicatorStyle: {
			backgroundColor: 'black'
		}
	}
	});

ProjectDetailNavigator.navigationOptions = {   
	title: 'Project',
	headerStyle: {
		elevation: 0,
		shadowOpacity: 0
	}
};

export default ProjectDetailNavigator;