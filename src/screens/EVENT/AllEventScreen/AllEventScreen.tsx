import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../../theme'
import { EmptyPostComponents, Header } from '../../../components'

export const AllEventScreen = () => {
  return (
    <View style={styles.container}>
      <Header title='All event' isAddButton />

      <FlatList
        data={[]}
        ListEmptyComponent={<EmptyPostComponents />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }
})