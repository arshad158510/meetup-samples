import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Icon } from './core/models';
import { TabChooserComponent, IconsSearcherComponent } from './components';
import { Images } from './core/images';

interface AppComponentProps {
  icons: Icon[];
  searchString: string;
  isModalVisible: boolean;
  selectedIcon: Icon;
  isOutline: boolean;

  setIsOutline: (value: boolean) => void;
  onSetSearchString: (text: string) => void;
  onIcon: (icon: Icon) => void;
  onCloseModal: () => void;
}

export class AppComponent extends Component<AppComponentProps> {

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.LOGO} style={styles.image}/>
        <TabChooserComponent
          isOutline={this.props.isOutline}
          onChoose={(value: boolean) => this.props.setIsOutline(value)}
        />
        <IconsSearcherComponent
          icons={this.props.icons}
          selectedIcon={this.props.selectedIcon}
          isModalVisible={this.props.isModalVisible}
          searchString={this.props.searchString}
          isOutline={this.props.isOutline}

          onSetSearchString={(text: string) => this.props.onSetSearchString(text)}
          onIcon={(icon: Icon) => this.props.onIcon(icon)}
          onCloseModal={() => this.props.onCloseModal()}
        />
      </View>
    );
  }

}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 16,
  },
  image: {
    width: 250,
    height: 58,
    alignSelf: 'center',
    marginVertical: 50,
  }
});