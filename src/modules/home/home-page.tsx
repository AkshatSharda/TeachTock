import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  PanResponder,
  StatusBar,
  Animated,
  ActivityIndicator,
} from 'react-native';
import MultipleAnswerOptions from '../../components/multiple-answer-options';
import icons from '../../common/icons';
import IconWithText from '../../components/icon-with-text';
import ProfileIcon from '../../components/profile-icon';
import Footer from '../../components/footer';
import colors from '../../common/colors';
import Header from '../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMcq, fetchMcqAnswer} from '../../redux/slice/home-slice';
import {CommonStyles} from '../../common/common-styles';
import {AppDispatch} from '../../redux/store';
import {RootState} from '../../redux/types';

const {width, height} = Dimensions.get('window');

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((rootState: RootState) => rootState?.homeReducer);
  const pan = useRef(new Animated.ValueXY()).current;

  const [updateQuestion, setUpdateQuestion] = useState(true); // [false, function]

  const resetPanResponder = React.useCallback(() => {
    // Reset to the initial position
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  }, [pan]);

  useEffect(() => {
    if (updateQuestion) {
      dispatch(fetchMcq());
    }
    setUpdateQuestion(false);
    resetPanResponder();
  }, [dispatch, updateQuestion, resetPanResponder]);

  const mcqData = state?.data;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) {
          // Allow only upward swipes
          pan.setValue({x: 0, y: gestureState.dy});
        }

        // Disable PanResponder if a swipe is detected
        if (gestureState.dy < -10) {
          // setPanResponderEnabled(true);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -height * 0.6 || gestureState.vy < -0.5) {
          // Swipe-up action
          Animated.timing(pan, {
            toValue: {x: 0, y: -height},
            useNativeDriver: false,
            duration: 150,
          }).start(() => {
            // setPanResponderEnabled(false);
            setUpdateQuestion(true);
          });
        } else {
          resetPanResponder();
        }
      },
    }),
  ).current;
  if (state?.isLoading) {
    return (
      <View style={[CommonStyles.fullFlexCenter, styles.container]}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }
  if (state?.isError) {
    return (
      <View style={[CommonStyles.fullFlexCenter, styles.container]}>
        <Text style={CommonStyles.errorText}>Something went wrong</Text>
      </View>
    );
  }

  const onAnswerSelection = (id: number) => {
    if (!mcqData?.correctOptionId) {
      dispatch(fetchMcqAnswer(id));
    }
  };

  if (mcqData?.user) {
    return (
      <View style={[CommonStyles.fullFlex, CommonStyles.blackBg]}>
        <Animated.View
          style={[
            styles.fullHeight,
            {transform: [{translateX: pan.x}, {translateY: pan.y}]},
          ]}
          {...panResponder.panHandlers}>
          <ImageBackground
            source={{uri: mcqData.image}}
            style={styles.backgroundImage}>
            <Header />
            <View style={styles.flexRow}>
              <Text style={styles.question}>{mcqData.question}</Text>
            </View>
            <View style={styles.bottomAligned}>
              <View style={styles.leftContainer}>
                <MultipleAnswerOptions
                  id={mcqData.id}
                  options={mcqData.options}
                  correctOptionId={mcqData.correctOptionId}
                  onAnswerSelection={onAnswerSelection}
                />
                <View style={styles.flexRow}>
                  <Text style={styles.name}>{mcqData.user.name}</Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.description}>{mcqData.description}</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <ProfileIcon icon={{uri: mcqData.user.avatar}} />
                <IconWithText
                  icon={icons.heart}
                  text={'87'}
                  iconStyle={styles.icon}
                />
                <IconWithText
                  icon={icons.comment}
                  text={'2'}
                  iconStyle={styles.icon}
                />
                <IconWithText
                  icon={icons.bookmark}
                  text={'203'}
                  iconStyle={styles.icon}
                />
                <IconWithText
                  icon={icons.forward}
                  text={'17'}
                  iconStyle={styles.icon}
                />
              </View>
            </View>
            <Footer title={mcqData.playlist} />
          </ImageBackground>
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backgroundImage: {
    paddingTop: StatusBar.currentHeight || 20,
    flex: 1,
    resizeMode: 'cover',
  },
  question: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
    backgroundColor: colors.blackOpacity7,
    marginRight: 80,
    marginTop: 40,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 16,
    padding: 8,
  },
  bottomAligned: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  leftContainer: {
    width: width - 80,
  },
  rightContainer: {
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexRow: {flexDirection: 'row'},
  icon: {
    height: 32,
    width: 32,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.blackOpacity7,
    marginLeft: 16,
    marginBottom: 8,
  },
  description: {
    color: 'white',
    fontSize: 12,
    backgroundColor: colors.blackOpacity7,
    marginLeft: 16,
  },
  fullHeight: {width: '100%', height: '100%'},
});

export default HomePage;
