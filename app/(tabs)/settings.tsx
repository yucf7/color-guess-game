import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useGameStore, Difficulty } from '../../store/gameStore';

export default function SettingsScreen() {
  const {
    difficulty,
    colorMode,
    soundEnabled,
    colorBlindMode,
    setDifficulty,
    setColorMode,
    toggleSound,
    toggleColorBlindMode,
    resetStats,
  } = useGameStore();

  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <LinearGradient
      colors={['#1a1a1a', '#2a2a2a']}
      style={styles.container}
    >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Difficulty</Text>
        <View style={styles.difficultyButtons}>
          {difficulties.map((d) => (
            <TouchableOpacity
              key={d}
              style={[
                styles.difficultyButton,
                difficulty === d && styles.activeDifficulty,
              ]}
              onPress={() => setDifficulty(d)}
            >
              <Text
                style={[
                  styles.difficultyText,
                  difficulty === d && styles.activeText,
                ]}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Sound Effects</Text>
          <Switch
            value={soundEnabled}
            onValueChange={toggleSound}
            trackColor={{ false: '#444', true: '#00ff00' }}
            thumbColor={soundEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.option}>
          <Text style={styles.optionText}>Colorblind Mode</Text>
          <Switch
            value={colorBlindMode}
            onValueChange={toggleColorBlindMode}
            trackColor={{ false: '#444', true: '#00ff00' }}
            thumbColor={colorBlindMode ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetStats}
      >
        <Text style={styles.resetText}>Reset Statistics</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyButton: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  activeDifficulty: {
    backgroundColor: '#00ff00',
  },
  difficultyText: {
    color: '#fff',
    fontSize: 16,
  },
  activeText: {
    color: '#000',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});