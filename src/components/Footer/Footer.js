import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render() {
    function copy_text(text, id) {
      navigator.clipboard.writeText(text)
      var button = document.getElementById(id)
      button.innerHTML = '&nbsp;✅&nbsp;'
      setTimeout(mouse_leave_button, 1500, id)
    }

    function mouse_leave_button(id) {
      var button = document.getElementById(id)
      button.innerHTML = 'Copy!'
    }

    const d = new Date()
    let year = d.getFullYear()
    return (
      <>
        <article className="box br3 ba b--black-10 mv4 w-100 w-90-m w-50-l mw6 shadow-5 pr3 center read-me">
          <h2>Read Me</h2>
          <ol>
            <li>
              Sign in with <br />
              Email : <code>demo@demo.com</code>
              <button
                className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f7 dib inline-button"
                onClick={() => {
                  copy_text('demo@demo.com', 'copy-demo-email-button')
                }}
                id="copy-demo-email-button"
              >
                Copy!
              </button>
              <br />
              Password : <code>demo</code>
              <button
                className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f7 dib inline-button"
                onClick={() => {
                  copy_text('demo', 'copy-demo-password-button')
                }}
                id="copy-demo-password-button"
              >
                Copy!
              </button>
              <br />
              <br />
            </li>
            <li>
              Insert URL of face pictre such as <br />
              <pre>
                https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg
              </pre>
              <div className="center">
                <button
                  className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f7 dib"
                  onClick={() => {
                    copy_text(
                      'https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg',
                      'copy-demo-url-button'
                    )
                  }}
                  id="copy-demo-url-button"
                >
                  Copy!
                </button>
              </div>
              <pre className="mt3">
                https://skybiometry.com/wp-content/uploads/2016/01/grouping-1st-R-e1451909599172.jpg
              </pre>
              <div className="center">
                <button
                  className="b ph2 pv1 input-reset ba b--black bg-transparent grow pointer f7 dib"
                  onClick={() => {
                    copy_text(
                      'https://skybiometry.com/wp-content/uploads/2016/01/grouping-1st-R-e1451909599172.jpg',
                      'copy-demo-url-button2'
                    )
                  }}
                  id="copy-demo-url-button2"
                >
                  Copy!
                </button>
              </div>
            </li>
          </ol>
        </article>
        <footer style={{ display: 'flex', justifyContent: 'center' }}>
          <p
          // onClick={() => onRouteChange('signin')}
          // className="f3 link dim black underline pa3 pointer"
          >
            © 2021 - {year} All Right Reseved. Made with ❤️ by Wisaroot
          </p>
        </footer>
      </>
    )
  }
}

export default Footer
