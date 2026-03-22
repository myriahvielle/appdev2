import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ todos, onComplete, onDelete }) {
  return (
    <ScrollView style={styles.list}>
      {todos.length === 0 ? (
        <View style={styles.empty}>
          <Text>No todos yet!</Text>
        </View>
      ) : (
        todos.map((item) => (
          <TodoCard
            key={item.id}
            todo={item}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  empty: {
    padding: 20,
    alignItems: 'center',
  },
})