import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { List } from 'immutable';

const App = () => {
  const [turn, setTurn] = useState(0);
  const [cells, setCells] = useState(Array(12).fill('?'));
  const [disabledCells, setDisabledCells] = useState(Array(12).fill(false));
  const [match1, setMatch1] = useState('');
  const [match2, setMatch2] = useState('');
  const [index1, setIndex1] = useState(null);
  const [index2, setIndex2] = useState(null);
  const [winner, setWinner] = useState('');
  const [tempVisibleCells, setTempVisibleCells] = useState(Array(12).fill(false));
  const [temporaryDisable, setTemporaryDisable] = useState(false); // Track temporary disable state
  const [lastPressedIndex, setLastPressedIndex] = useState(null); // Track last pressed button index

  const initialData = List([
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F',
  ]);

  useEffect(() => {
    shuffleData();
  }, []);

  useEffect(() => {
    if (match1 && match2) {
      checkMatch();
    }
  }, [match1, match2]);

  const shuffleData = () => {
    const shuffled = initialData.toArray().sort(() => Math.random() - 0.5);
    setCells(shuffled);
    setTempVisibleCells(Array(12).fill(false)); // Reset visible cells on shuffle
    setTemporaryDisable(false); // Reset temporary disable state
    setLastPressedIndex(null); // Reset last pressed index
  };

  const checkMatch = () => {
    if (match1 === match2) {
      // Disable matched cells
      const newDisabledCells = [...disabledCells];
      newDisabledCells[index1] = true;
      newDisabledCells[index2] = true;
      setDisabledCells(newDisabledCells);

      setWinner(`Matched: ${match1}`);
    } else {
      setWinner('Not Matched');

      // Temporarily show cells and disable buttons
      const newTempVisibleCells = [...tempVisibleCells];
      newTempVisibleCells[index1] = true;
      newTempVisibleCells[index2] = true;
      setTempVisibleCells(newTempVisibleCells);
      setTemporaryDisable(true); // Set temporary disable

      setTimeout(() => {
        const resetTempVisibleCells = [...tempVisibleCells];
        resetTempVisibleCells[index1] = false;
        resetTempVisibleCells[index2] = false;
        setTempVisibleCells(resetTempVisibleCells);
        setTemporaryDisable(false); // Reset temporary disable after delay
      }, 1000); // Show for 1 second
    }

    // Reset match states
    setMatch1('');
    setMatch2('');
    setIndex1(null);
    setIndex2(null);
  };

  const handlePress = (index) => {
    if (disabledCells[index] || temporaryDisable || index === lastPressedIndex) return; // Disable if the same button was pressed back-to-back

    if (match1 === '') {
      setMatch1(cells[index]);
      setIndex1(index);
      setTempVisibleCells(prev => {
        const newTemp = [...prev];
        newTemp[index] = true;
        return newTemp;
      });
    } else if (match2 === '') {
      setMatch2(cells[index]);
      setIndex2(index);
      setTempVisibleCells(prev => {
        const newTemp = [...prev];
        newTemp[index] = true;
        return newTemp;
      });
    }

    setTurn(turn === 0 ? 1 : 0);
    setLastPressedIndex(index); // Update last pressed button index
  };

  const handleRestart = () => {
    setTurn(0);
    setCells(Array(12).fill('?'));
    setDisabledCells(Array(12).fill(false));
    setMatch1('');
    setMatch2('');
    setIndex1(null);
    setIndex2(null);
    setWinner('');
    shuffleData();
  };

  return (
    <View style={styles.pcontainer}>
      <Text style={styles.winnerText}>{winner}</Text>
      {Array.from({ length: 4 }, (_, row) => (
        <View key={row} style={styles.container}>
          {Array.from({ length: 3 }, (_, col) => {
            const index = row * 3 + col;
            return (
              <Button
                key={index}
                title={tempVisibleCells[index] ? cells[index] : '   '}
                onPress={() => handlePress(index)}
                disabled={disabledCells[index] || temporaryDisable} // Disable button based on state
              />
            );
          })}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={handleRestart} />
        <Button title="Shuffle" onPress={shuffleData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
  pcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  winnerText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default App;
