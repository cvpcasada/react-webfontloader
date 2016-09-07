import React, {Component} from 'react';
import Webfont from 'webfontloader';

const getFamilies = (source,families) =>
  source === 'typekit' ? { id: families.join(';'), api: '//use.edgefonts.net' } : {families}

const getUrls = (source, urls) =>
  source === 'custom' ? {urls} : {}

const getCharacterSubsetting = (source, text) =>
  source === 'google' && text ? {text} : {}


class WebFontComponent extends Component {
  state = {
    loading: false,
    active: false,
    inactive: false
  }

  componentDidMount() {
    this.loadFonts(this.props);
  }

  componentWillUnmount() {
    this.willUnmount = true
  }

  loadFonts = ({source, families, urls, text, classes = true, events = true, timeout = 3000}) => {
    const webfontOptions = {
      [source]: {
          ...getFamilies(source,families),
          ...getUrls(source,urls),
          ...getCharacterSubsetting(source,text)
      },
      classes,
      events,
      timeout,
      loading: () => {
        console.log('loading');
        return !this.willUnmount ? this.setState({loading: true, active: false, inactive: false}) : undefined
      },
      active: () => !this.willUnmount ? this.setState({loading: false, active: true, inactive: false}) : undefined,
      inactive: () => !this.willUnmount ? this.setState({loading: false, active: false, inactive: true}) : undefined
    }

    console.log(webfontOptions);

    Webfont.load(webfontOptions);
  }

  componentWillReceiveProps(nextProps) {
    this.loadFonts(nextProps);
  }

  render() {
    return this.props.children({...this.state}) || null;
  }

}

export default WebFontComponent;
