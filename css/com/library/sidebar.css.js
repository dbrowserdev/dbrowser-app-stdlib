import {css} from '../../../vendor/lit-element/lit-element.js'
import buttons2css from '../../buttons2.css.js'
import tooltipcss from '../../tooltip.css.js'

const cssStr = css`
${buttons2css}

:host {
  display: block;
  height: 100%;
}

p {
  line-height: 1.6;
}

${tooltipcss}

.panel {
  height: calc(100vh - 50px);
  overflow: hidden;
}

.panel > :first-child {
  margin-top: 0;
}

.panel > :last-child {
  margin-bottom: 0;
}

.panel h2 {
  font-weight: 500;
  font-size: 27px;
}

.panel h2 span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.panel-banner {
  position: relative;
}

.panel-banner .cover {
  display: block;
  width: 100%;
  max-height: 100px;
  object-fit: cover;
}

.panel-banner .thumb {
  position: absolute;
  bottom: -50px;
  left: 16px;
  width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
}

.panel-banner .ctrls {
  position: absolute;
  right: 10px;
  bottom: -40px;
}

.panel-body {
  padding: 10px 20px;
}

.panel-banner + .panel-body {
  padding-top: 50px; 
}

.panel-tabsnav {
  display: flex;
  border-bottom: 1px solid var(--light-border-color);
  padding: 0 16px;
}

.panel-tabsnav a {
  font-size: 11px;
  color: rgba(0,0,0,0.75);
  padding: 4px 8px;
  margin: 0 4px;
  border-bottom: 3px solid transparent;
}

.panel-tabsnav a:hover {
  cursor: pointer;
  border-bottom-color: #ddd;
}

.panel-tabsnav a.current {
  border-bottom-color: #555;
}
`
export default cssStr