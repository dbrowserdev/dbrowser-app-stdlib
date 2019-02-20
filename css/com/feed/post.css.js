import {css} from '../../../vendor/lit-element/lit-element.js'
import buttonscss from '../../buttons.css.js'

const cssStr = css`
${buttonscss}

a:hover {
  text-decoration: underline;
}

:host {
  display: flex;
  background: #fff;
  padding: 14px;
}

.avatar-column {
  width: 64px;
}

.content-column {
  flex: 1;
}

.avatar {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.header {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-text--muted);
}

.title {
  font-weight: bold;
  color: var(--color-text);
}

.domain,
.permalink {
  color: inherit;
}

.body {
  white-space: pre;
  font-size: 14px;
  color: var(--color-text--dark);
}
`
export default cssStr