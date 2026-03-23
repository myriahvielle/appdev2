import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TodoScreen() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn react native flexbox", done: true },
    { id: "2", text: "Create todo app", done: false },
  ]);
  const [search, setSearch] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const addTodo = () => {
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: trimmed, done: false },
    ]);
    setNewTodo("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Tasks</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search todos..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No todos found.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => toggleTodo(item.id)}
            >
              <Ionicons
                name={item.done ? "checkmark-circle" : "ellipse-outline"}
                size={24}
                color={item.done ? "#7D7AFF" : "#ccc"}
              />
            </TouchableOpacity>

            <Text style={[styles.todoText, item.done && styles.todoTextDone]}>
              {item.text}
            </Text>

            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Ionicons name="trash-outline" size={20} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Add Bar */}
      <View style={styles.addContainer}>
        <TextInput
          style={styles.addInput}
          placeholder="Add a new task"
          placeholderTextColor="#999"
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    backgroundColor: "#7D7AFF",
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
    fontSize: 15,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  checkBox: {
    marginRight: 12,
  },
  todoText: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  todoTextDone: {
    textDecorationLine: "line-through",
    color: "#bbb",
  },
  addContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 30,
    gap: 10,
},
addInput: {
  flex: 1,
  fontSize: 15,
  color: "#333",
  backgroundColor: "#F0F0F0",
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderRadius: 14,
},
addButton: {
  backgroundColor: "#FFCC00",
  padding: 14,
  borderRadius: 14,
  justifyContent: "center",
  alignItems: "center",
},
 
});