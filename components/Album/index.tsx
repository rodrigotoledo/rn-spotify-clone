import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { AlbumType } from '../../types'

export type AlbumProps = {
  album: AlbumType
  
}

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.album.imageUri}} style={styles.image} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  container: {
    width: 200,
    margin: 10,
  },

  image: {
    width: '100%',
    height: 155
  },

  text:{
    color: 'grey',
    marginTop: 10
  }

})
