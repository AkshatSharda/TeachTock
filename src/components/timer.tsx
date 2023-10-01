import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../common/colors';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <Text style={styles.timerText}>{formatTime(seconds)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 4,
  },
});

export default Timer;
