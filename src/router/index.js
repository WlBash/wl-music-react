import WlDiscover from '@/pages/discover';
import WlMine from '@/pages/mine';
import WlFriend from '@/pages/friend';

const routes = [
    {
        path: '/',
        exact: true,
        component: WlDiscover
    },
    {
        path: '/mine',
      
        component: WlMine
    },
    {
        path: '/friend',
        component: WlFriend
    },
];

export default routes;