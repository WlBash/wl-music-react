import React from "react"

import WlDiscover from '@/pages/discover';
import WlRecommend from '@/pages/discover/c-pages/recommend'
import WlRanking from '@/pages/discover/c-pages/ranking'
import WlSongs from '@/pages/discover/c-pages/songs'
import WlDjradio from '@/pages/discover/c-pages/djradio'
import WlAlbum from '@/pages/discover/c-pages/album'
import WlArtist from '@/pages/discover/c-pages/artist'

import WlMine from '@/pages/mine';
import WlFriend from '@/pages/friend';

import { Redirect } from "react-router-dom"

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: WlDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                  <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: '/discover/recommend',
                component: WlRecommend,
            },
            {
                path: '/discover/ranking',
                component: WlRanking,
            },
            {
                path: '/discover/songs',
                component: WlSongs,
            },
            {
                path: '/discover/djradio',
                component: WlDjradio,
            },
            {
                path: '/discover/artist',
                component: WlArtist,
            },
            {
                path: '/discover/album',
                component: WlAlbum,
            }
        ]
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