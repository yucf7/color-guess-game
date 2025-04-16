import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useGameStore } from '../store/gameStore';

interface ColorSwatchProps {
  color: string;
  onPress: () => void;
  isCorrect: boolean;
  symbol?: string;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export function ColorSwatch({ color, onPress, isCorrect, symbol }: ColorSwatchProps) {
  const colorBlindMode = useGameStore((state) => state.colorBlindMode);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(1, {
            damping: 10,
            stiffness: 100,
          }),
        },
      ],
    };
  });

  return (
    <AnimatedTouchable
      style={[
        styles.swatch,
        { backgroundColor: color },
        animatedStyle,
      ]}
      onPress={onPress}
    >
      {colorBlindMode && symbol && (
        <Animated.Text style={styles.symbol}>
          {symbol}
        </Animated.Text>
      )}
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  swatch: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  symbol: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});