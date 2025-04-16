import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, JetBrainsMono_700Bold } from '@expo-google-fonts/jetbrains-mono';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';
import { useGameStore } from '../../store/gameStore';
import { ColorSwatch } from '../../components/ColorSwatch';

const SYMBOLS = ['●', '■', '▲', '★', '♦', '♠'];

export default function GameScreen() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono_700Bold,
  });

  const {
    score,
    attempts,
    difficulty,
    colorMode,
    incrementScore,
    incrementAttempts,
  } = useGameStore();

  const scale = useSharedValue(1);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
  };

  const targetColor = generateRandomColor();
  const colors = [
    `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`,
    ...Array(difficulty === 'easy' ? 2 : 5).fill(null).map(() => {
      const color = generateRandomColor();
      return `rgb(${color.r}, ${color.g}, ${color.b})`;
    }),
  ].sort(() => Math.random() - 0.5);

  const handleColorPress = (selectedColor: string) => {
    incrementAttempts();
    const isCorrect = selectedColor === `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`;
    
    if (isCorrect) {
      incrementScore();
      scale.value = withSpring(1.2, {}, () => {
        scale.value = withSpring(1);
      });
    }
  };

  const scoreStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a']}
      style={styles.container}
    >
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Animated.Text style={[styles.score, scoreStyle]}>
          Score: {score}/{attempts}
        </Animated.Text>
        <Text style={styles.target}>
          rgb({targetColor.r}, {targetColor.g}, {targetColor.b})
        </Text>
      </View>

      <View style={styles.grid}>
        {colors.map((color, index) => (
          <ColorSwatch
            key={color}
            color={color}
            onPress={() => handleColorPress(color)}
            isCorrect={color === `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`}
            symbol={SYMBOLS[index]}
          />
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  score: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'JetBrainsMono_700Bold',
  },
  target: {
    color: '#00ff00',
    fontSize: 20,
    fontFamily: 'JetBrainsMono_700Bold',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});