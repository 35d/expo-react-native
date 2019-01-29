//@flow

import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  slider: {
    width: '100%',
  },
  priceSection: {
    width: '100%',
    padding: 16,
  },
  priceSectionTop: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  priceSectionBottom: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 2,
  },
});

export default class PriceSectionComponent extends React.Component {
  state = {
    display: new Animated.Value(this.props.top),
    value: this.props.top,
  };

  componentWillReceiveProps(nextProps) {
    Animated.timing(this.state.display, {
      toValue: nextProps.top,
      duration: 600,
    }).start();
  }

  componentDidMount() {
    this.state.display.addListener(({ value }) => {
      this.setState({ value });
    });
  }

  numberWithCommas = (x) => {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  render() {
    const valueToRender = this.numberWithCommas(this.state.value.toFixed(this.props.fixed));

    return (
      <View style={styles.priceSection}>
        <Text style={[styles.priceSectionTop]}>
          {this.props.symbol ? `${this.props.symbol} ` : undefined}
          {valueToRender}
        </Text>
        <Text style={[styles.priceSectionBottom]}>{this.props.bottom}</Text>
      </View>
    );
  }
}
