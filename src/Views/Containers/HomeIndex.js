// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Text, StatusBar, View, StyleSheet, Slider } from 'react-native';
import { bindActionCreators } from 'redux';
import { SemiModal } from 'react-native-half-modal';

import * as PriceActions from '../../Actions/Price';
import * as CountActions from '../../Actions/Count';
// import PriceSectionComponent from '../Components/PriceSection';

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
    isVisible: false,
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

  modalClose = () => {
    this.setState({ isVisible: false });
  };

  modalOpen = () => {
    this.setState({ isVisible: true });
  };

  render() {
    // if (!this.props.isAvailable) {
    //   return null;
    // }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        {/* <PriceSectionComponent top={this.state.value} bottom="United States Dollar" symbol="$" fixed={2} /> */}
        {/* <PriceSectionComponent top={Number(this.state.value / this.props.euro)} bottom="Euro" symbol="€" fixed={2} /> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        {/* <Text style={styles.text}>{this.props.btc.euro}</Text> */}
        <Text
          style={styles.text}
          onPress={() => {
            this.props.incrementCount();
          }}
        >
          +1
        </Text>
        <Text
          style={{ color: '#FFF', textAlign: 'center', marginTop: 64 }}
          onPress={() => {
            this.modalOpen();
          }}
        >
          OPEN
        </Text>
        <Text style={styles.text}>{this.props.count}</Text>
        {/* <Text style={styles.text}>{this.props.btc}</Text>
        <Slider
          style={styles.slider}
          maximumValue={1000000}
          minimumValue={1}
          step={1}
          value={this.state.value}
          onSlidingComplete={this._handleUpdateConversion}
        /> */}
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
        <SemiModal
          isVisible={this.state.isVisible}
          onModalClose={() => {
            this.setState({ isVisible: false });
          }}
          style={{
            backgroundColor: 'pink',
          }}
          backgroundColor="#20aaea44"
        >
          <Text>I am the half-modal content</Text>
          <Text>I am the half-modal content</Text>
          <Text>I am the half-modal content</Text>
          <Text>I am the half-modal content</Text>
        </SemiModal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign({}, PriceActions, CountActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeIndex);
