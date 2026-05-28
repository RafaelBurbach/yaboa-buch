import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { BottomNav } from "../components/bottom-nav"
import { Button } from "../components/button"
import { Input } from "../components/input"

type EventItem = {
  id: number
  name: string
  date: string
  place: string
}

const initialEvents: EventItem[] = [
  { id: 1, name: "Feira Yaboa", date: "30/05/2026", place: "Praça Central" },
  { id: 2, name: "Encontro de amigos", date: "05/06/2026", place: "Casa da Ana" },
]

export default function Home() {
  const params = useLocalSearchParams<{ create?: string }>()
  const [events, setEvents] = useState(initialEvents)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [place, setPlace] = useState("")

  useEffect(() => {
    if (params.create === "1") {
      handleCreate()
    }
  }, [params.create])

  function clearForm() {
    setEditingId(null)
    setName("")
    setDate("")
    setPlace("")
    setShowForm(false)
  }

  function handleSave() {
    if (!name.trim() || !date.trim() || !place.trim()) {
      return Alert.alert("Evento", "Preencha nome, data e local.")
    }

    if (editingId) {
      setEvents((oldEvents) =>
        oldEvents.map((event) => event.id === editingId ? { ...event, name, date, place } : event)
      )
    } else {
      setEvents((oldEvents) => [...oldEvents, { id: Date.now(), name, date, place }])
    }

    clearForm()
  }

  function handleEdit(event: EventItem) {
    setEditingId(event.id)
    setName(event.name)
    setDate(event.date)
    setPlace(event.place)
    setShowForm(true)
  }

  function handleDelete(id: number) {
    setEvents((oldEvents) => oldEvents.filter((event) => event.id !== id))
    if (editingId === id) {
      clearForm()
    }
  }

  function handleCreate() {
    setEditingId(null)
    setName("")
    setDate("")
    setPlace("")
    setShowForm(true)
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/img/yaboa-cropped.png")} style={styles.logo} />

        <Text style={styles.title}>Eventos</Text>

        {showForm ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{editingId ? "Editar evento" : "Novo evento"}</Text>
            <View style={styles.form}>
              <Input placeholder="Nome do evento" value={name} onChangeText={setName} />
              <Input placeholder="Data" value={date} onChangeText={setDate} />
              <Input placeholder="Local" value={place} onChangeText={setPlace} />
              <Button label={editingId ? "Salvar edição" : "Criar evento"} onPress={handleSave} />
              <Button label="Cancelar" style={styles.secondaryButton} onPress={clearForm} />
            </View>
          </View>
        ) : null}

        <View style={styles.list}>
          {events.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <View style={styles.eventInfo}>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventText}>{event.date}</Text>
                <Text style={styles.eventText}>{event.place}</Text>
              </View>

              <View style={styles.iconRow}>
                <TouchableOpacity style={styles.iconButton} onPress={() => handleEdit(event)}>
                  <Text style={styles.iconText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, styles.deleteButton]} onPress={() => handleDelete(event.id)}>
                  <Text style={styles.iconText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNav onCreate={handleCreate} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFEDD5",
  },
  content: {
    flexGrow: 1,
    padding: 24,
    paddingBottom: 120,
  },
  logo: {
    width: 190,
    height: 112,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 24,
    marginBottom: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#431407",
    marginTop: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 18,
    marginTop: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#431407",
  },
  form: {
    marginTop: 14,
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: "#FDBA74",
  },
  list: {
    marginTop: 18,
    gap: 12,
  },
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#431407",
  },
  eventText: {
    fontSize: 14,
    color: "#7C2D12",
    marginTop: 3,
  },
  iconRow: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 12,
  },
  iconButton: {
    minWidth: 64,
    height: 42,
    borderRadius: 21,
    paddingHorizontal: 10,
    backgroundColor: "#F97316",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "#DC2626",
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
})
