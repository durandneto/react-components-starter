import React from 'react'

const Context = {
  Theme: {
    foreground: '#292E33',
    background: '#eeeeee',
  }
}

export const ThemeContext = React.createContext(
  {
    Theme: Context.Theme,
  }
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeContext.Provider value={Context}>
      {
        this.props.children
      }
      </ThemeContext.Provider>
    );
  }
}

class ContextedApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <App>
        <ThemeContext.Consumer>
        {({ Theme }) => {
            let elementWithClassName =
            React.cloneElement(
              this.props.children,
              { Theme }
            )
            return elementWithClassName
        }}
        </ThemeContext.Consumer>
      </App>
    )
  }
}

export default ContextedApp