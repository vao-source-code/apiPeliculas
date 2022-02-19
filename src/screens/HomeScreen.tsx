import React, { useEffect } from "react";
import {useNavigation} from  '@react-navigation/core'
import {View  , Text, Button} from 'react-native';
import movieControlers from "../api/movieControlers";
import { MovieNowPlaying } from "../interfaces/movieInterfaces";

export const HomeScreen = () => {

    useEffect( () => {

        movieControlers.get<MovieNowPlaying>('/now_playing')
            .then( resp => {
                console.log(resp.data.results[0].title)
            });
    }, [])

  return (
    <View>
        
    </View>
  )
}
