import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function TodoCard({ todo, onComplete, onDelete }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.completeBtn} onPress={() => onComplete(todo.id)}>
        {todo.isComplete ? (
          <Ionicons name="checkmark-circle" size={24} color="#28a745" />
        ) : (
          <Ionicons name="ellipse-outline" size={24} color="#28a745" />
        )}

        <Text style={[styles.text, todo.isComplete && styles.completed]}>
            {todo.todo}
        </Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(todo.id)}>
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    width: 'full'
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  completeBtn: {
    padding: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: '100%',
  },
  deleteBtn: {
    width: 35,
    backgroundColor: '#dc3545',
    padding: 6,
    borderRadius: 6,
  },
})