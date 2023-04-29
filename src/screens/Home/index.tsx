import { useState } from 'react';
import { Image, View, Text } from "react-native";
import { styles } from "./styles";

import LogoImg from '../../assets/logo_white.png';
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { questions } from "../../util/question";
import { Button } from '../../components/Button';
export const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(1);
  const lastTodoInView = currentPage * todosPerPage;
  const firstTodoInView = lastTodoInView - todosPerPage;
  const todosForDisplay = questions.slice(firstTodoInView, lastTodoInView);

  const renderItems = todosForDisplay.map((todo) => (
    <Section key={todo.id} title={todo.title} currentPage={todo.id} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={LogoImg} style={styles.imgContainer} />
      </View>
      <View style={styles.content} >
        <View style={styles.formContainer} >
          <Header />
          <View style={styles.section}>
            <View>
              {
                renderItems
              }
            </View>
          </View>
          <View style={styles.button}>
            {
              currentPage > 1
                ? <Button title='Voltar' onPress={() => setCurrentPage(currentPage - 1)} />
                : <View />
            }
            {
              currentPage < questions.length
                ? <Button title='Próximo' onPress={() => setCurrentPage(currentPage + 1)} />
                : <View />
            }
          </View>
        </View>
      </View>
    </View >
  )
}