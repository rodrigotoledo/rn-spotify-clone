import React from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import Album from '../Album';

export type AlbumCategoryProps = {
    id: String,
    title: String,
    albums: [Album],
  
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList data={props.albums} renderItem={({ item }) => <Album album={item} />} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default AlbumCategory

const styles = StyleSheet.create({
  container: {
    // width: 200,
    margin: 10,
  },
  
  title:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  }

})
