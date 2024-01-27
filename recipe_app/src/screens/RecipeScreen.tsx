import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, List} from 'react-native';

function Section({ children, title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

const RecipeScreen = ({ route, navigation }) => {
  const { recipe, title } = route.params;

  const { directions, ingredients, cookTime, recipeAuthor, imageUrl, description } = recipe;

  const renderListItem = ({ item, index }) => (
    <Text style={[styles.listItem, styles.sectionDescription]}>{`${index + 1}. ${item}`}</Text>
  );
  navigation.setOptions({ title });
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={{ uri: imageUrl }} style={styles.headerImage} />
      <View style={styles.container}>
        <Section title="Author:">{recipeAuthor}</Section>
        <Section title="Description:">{description}</Section>
        <Section title="Ingredients:">
          {ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={styles.sectionDescription}>{`${index + 1}. `}</Text>
                <Text style={styles.sectionDescription}>{ingredient}   </Text>
              </View>
          ))}
        </Section>
        <Section title="Time to Cook:">{cookTime}</Section>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Directions</Text>
            {directions.map((direction, index) => (
                 <View key={index} style={styles.ingredientItem}>
                   <Text style={styles.sectionDescription}>{`${index + 1}. `}</Text>
                   <Text style={styles.sectionDescription}>{direction}   </Text>
                 </View>
             ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    maxWidth: '100%',
    textAlign: 'justify',
    flexWrap: 'wrap',
  },
  container: {
    backgroundColor: 'white',
  },
  headerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  listItem: {
    marginVertical: 5,
  },
  ingredientItem: {
       flexDirection: 'row',
       alignItems: 'center',
       marginRight: 10,
       marginBottom: 8,
   },
});

export default RecipeScreen;
