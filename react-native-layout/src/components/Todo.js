import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'
import { Ionicons } from '@expo/vector-icons'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([])

  const handleAddTodo = () => {
    if (!todo.trim()) return
    const newTodo = {
      id: Date.now(),
      todo: todo,
      isComplete: false,
    }
    setTodos((prev) => [newTodo, ...prev])
    setTodo('')
  }

  const handleCompleteTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t))
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  useEffect(() => {
    setFilteredTodos(
      todos.filter((t) =>
        t.todo.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, todos])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>

      
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Search todos..."
        />
      </View>

      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
          placeholder="Enter a to do"
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddTodo}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      
      <ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 20 }}>
        {filteredTodos.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No todos found</Text>
          </View>
        ) : (
          filteredTodos.map((item) => (
            <TodoCard
              key={item.id}
              todo={item}
              onComplete={handleCompleteTodo}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#cadef1a8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: 'white',
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
})