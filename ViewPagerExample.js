import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'react-native-best-viewpager';

export default class ViewPagerExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={styles.container}
          indicator={this._renderDotIndicator()}>
          <View
            style={{
              backgroundColor: 'cadetblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>page one</Text>
          </View>
          <View
            style={{
              backgroundColor: 'cornflowerblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>page two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#1AA094',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>

        {/* <IndicatorViewPager
          style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}
          indicator={this._renderTitleIndicator()}>
          <View style={{backgroundColor: 'cadetblue'}}>
            <Text>page one</Text>
          </View>
          <View style={{backgroundColor: 'cornflowerblue'}}>
            <Text>page two</Text>
          </View>
          <View style={{backgroundColor: '#1AA094'}}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>

        <IndicatorViewPager
          style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}
          indicator={this._renderTabIndicator()}>
          <View style={{backgroundColor: 'cadetblue'}}>
            <Text>page one</Text>
          </View>
          <View style={{backgroundColor: 'cornflowerblue'}}>
            <Text>page two</Text>
          </View>
          <View style={{backgroundColor: '#1AA094'}}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager> */}
      </View>
    );
  }

  // _renderTitleIndicator() {
  //   return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  // }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} paddingVertical={10} />;
  }

  // _renderTabIndicator() {
  //   let tabs = [
  //     {
  //       text: 'Home',
  //       iconSource: require('./assets/ic_tab_circle.png'),
  //       selectedIconSource: require('./assets/ic_tab_circle.png'),
  //     },
  //     {
  //       text: 'Message',
  //       iconSource: require('./assets/ic_tab_circle.png'),
  //       selectedIconSource: require('./assets/ic_tab_circle.png'),
  //     },
  //     {
  //       text: 'Profile',
  //       iconSource: require('./assets/ic_tab_circle.png'),
  //       selectedIconSource: require('./assets/ic_tab_circle.png'),
  //     },
  //   ];
  //   return <PagerTabIndicator tabs={tabs} />;
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Textstyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 15,
    flexDirection: 'row',
  },
});
