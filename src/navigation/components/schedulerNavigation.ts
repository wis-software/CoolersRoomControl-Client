import {createStackNavigator} from 'react-navigation';

import Scheduler from '../../screens/Scheduler/components/Scheduler';

export default createStackNavigator({
	Scheduler: {
		screen: Scheduler,
	},
}, {
	initialRouteName: 'Scheduler',
});
