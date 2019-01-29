// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Text, StatusBar, View, StyleSheet, Slider } from 'react-native';
import { bindActionCreators } from 'redux';

import * as PriceActions from '../../Actions/Price';
import PriceSectionComponent from '../Components/PriceSection';

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
  text: {
    color: '#FFF',
  },
});

class HomeIndex extends React.Component {
  state = {
    value: 1,
  };

  async componentDidMount() {
    const ltc = await this.fetchPrice('https://api.cryptowat.ch/markets/gdax/ethusd/price');
    const eth = await this.fetchPrice('https://api.cryptowat.ch/markets/gdax/ltcusd/price');
    const btc = await this.fetchPrice('https://api.cryptowat.ch/markets/gdax/btcusd/price');
    const euro = await this.fetchPrice('https://api.cryptowat.ch/markets/bitstamp/eurusd/price');

    this.props.priceUpdate(btc, ltc, eth, euro);
  }

  _handleUpdateConversion = (value) => this.setState({ value });

  fetchPrice = async (source) => {
    const response = await fetch(source);
    const json = await response.json();
    return json.result.price;
  };

  render() {
    if (!this.props.isAvailable) {
      return null;
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        {/* <PriceSectionComponent top={this.state.value} bottom="United States Dollar" symbol="$" fixed={2} /> */}
        {/* <PriceSectionComponent top={Number(this.state.value / this.props.euro)} bottom="Euro" symbol="€" fixed={2} /> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        <Text style={styles.text}>aaaaaa</Text>
        <Text style={styles.text}>aaaaaa</Text>
        <Text style={styles.text}>aaaaaa</Text>
        <Slider
          style={styles.slider}
          maximumValue={1000000}
          minimumValue={1}
          step={1}
          value={this.state.value}
          onSlidingComplete={this._handleUpdateConversion}
        />
        {/* <PriceSectionComponent
          top={Number(this.state.value / this.props.ltc)}
          bottom="Litecoin"
          symbol="LTC"
          fixed={3}
        />

        <PriceSectionComponent
          top={Number(this.state.value / this.props.eth)}
          bottom="Ethereum"
          symbol="ETH"
          fixed={4}
        />

        <PriceSectionComponent
          top={Number(this.state.value / this.props.btc)}
          bottom="Bitcoin"
          symbol="BTC"
          fixed={5}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign({}, PriceActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeIndex);
