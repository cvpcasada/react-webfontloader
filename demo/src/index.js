import React from 'react'
import {render} from 'react-dom'

import WebFont from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-webfontloader Demo</h1>
      <WebFont families={['Droid Sans']} source='google'>
        {
          ({loading, active, inactive}) => {
            if (loading) {
              return <div style={{fontSize: '5em'}}>Default Font</div>
            }

            if (active) {
              return <div style={{fontFamily:'Droid Sans', fontSize: '5em'}}>Styled Font</div>

            }

            if (inactive) {
              return <div>Something Went wrong</div>
            }

            return <div style={{fontSize: '5em'}}>Webfont not yet loaded</div>

          }

        }
      </WebFont>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
