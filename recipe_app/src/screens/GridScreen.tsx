import React from 'react';
import { View, Text, ImageBackground, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import data from '../data/recipe_list.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

 // Find the item with the largest totalLikes
  const itemWithMostLikes = data.recipes.reduce((prev, current) => {
    return prev.totalLikes > current.totalLikes ? prev : current;
  });

const GridScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Card containerStyle={styles.cardContainer}>
        <ImageBackground source={{ uri: item.imageUrl }} style={styles.image}>
          <View style={styles.overlay}>
            <View style={styles.topRow}>
              <Text style={styles.author}>{item.recipeAuthor}</Text>
              {item === itemWithMostLikes ? (
                <Icon name="heart" size={15} style={styles.heartIcon} />
              ) : (
                <Icon name="heart-o" size={15} style={styles.heartIcon} />
              )}
            </View>
            <Text style={styles.recipeName}>{item.recipeName}</Text>
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Icon name="clock-o" size={15} style={styles.icon} />
                <Text style={styles.iconText}>{item.cookingTime}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="shopping-bag" size={10} style={styles.icon} />
                <Text style={styles.iconText}>{item.amountOfIngredients}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="question-circle" size={15} style={styles.icon} />
                <Text style={styles.iconText}>{item.recipeDifficulty}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );

  const handlePress = (item) => {
    navigation.navigate('RecipeScreen', { recipe: item, title: item.recipeName });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.recipeName}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
  },
  author: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 10,
  },
  recipeName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 90,
    paddingHorizontal: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    marginRight: 3,
  },
  iconText: {
    color: 'white',
    fontSize: 9,
  },
  heartIcon: {
    color: 'red',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 8,
  },
});

export default GridScreen;
