import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
const { width } = Dimensions.get('window')

import { setUsername } from './actions';
import { selectUsername, selectUser, selectError } from './selectors';

import User from './User';
import Error from './Error';

export class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Enter username',
      user: '',
      error: '',
      focused: false
    };
  }

  handleFocus = () => { // experimental syntax to not use bind(this) in constructor
    this.setState({text:''});
    this.setState({focused: true});
  }

  handleBlur = () => {
    this.setState({focused: false});
  }

  handleSubmit = () => {
    this.setState({focused: false});
    this.props.handleSubmit(this.state.text)
  }

  render() {
    const { user, error } = this.props;

    return (
      <StyledView>
          <StyledTextInput
            onChangeText={(text) => this.setState({text})}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onSubmitEditing={this.handleSubmit}
            value={this.state.text}
            style={{backgroundColor: this.state.focused ? '#D4AF37' : 'white'}}
          />
        {error ? <Error error={error} /> : null}
        {!error ? <User user={user} /> : null}
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1
  padding: 30px
  justifyContent: flex-start
  alignItems: center
  backgroundColor: #576980
`;

const StyledTextInput = styled.TextInput`
  height: 60
  borderColor: gray
  borderRadius: 5
  borderWidth: 2
  fontSize: 20
  textAlign: center
  width: ${width - 40}
`;

HomePage.propTypes = {
  handleSubmit: PropTypes.func,
  username: PropTypes.string,
  user: PropTypes.any,
  error: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: username => {
      dispatch(setUsername(username.toLowerCase()))
    }
  }
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  user: selectUser(),
  error: selectError()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
