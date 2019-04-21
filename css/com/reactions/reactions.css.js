import {css} from '../../../vendor/lit-element/lit-element.js'


const cssStr = css`

.reaction {
  padding: 4px 4px 3px;
  line-height: 14px;
  font-size: 10px;
  font-weight: 500;
  color: #444;
  border-radius: 12px;
  margin-right: 4px;
}

.reaction:hover {
  cursor: pointer;
  background: #f5f8ff;
}

.reaction .count {
  font-size: 11px;
}

.reaction.by-user {
  background: #f5f8ff;
  font-weight: bold;
}

.reaction.by-user:hover {
  background: #e3e9f7;
}

.reaction.add-btn {
  font-size: 16px;
  line-height: 4px;
  color: #7182a5;
  padding: 0px 5px 2px;
  transition: opacity 0.2s;
  opacity: 0;
}

.reaction.add-btn.pressed {
  background: #e3e9f7;
  box-shadow: inset 0 2px 3px rgba(0,0,0,.05);
  opacity: 1;
}
`
export default cssStr