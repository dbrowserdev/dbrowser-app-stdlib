import {css} from '../../vendor/lit-element/lit-element.js'


const cssStr = css`
:host {
  display: block;
  background: #fff;
  border: 1px solid #ddd;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

.cover-photo img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.avatar {
  position: relative;
}

.avatar img {
  position: absolute;
  left: 10px;
  top: -40px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 3px solid #fff;
}

.ident {
  padding: 10px 10px 10px 100px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.domain {
  color: var(--color-text--muted);
  font-weight: 500;
}

.description {
  padding: 6px 14px 14px;
}
`
export default cssStr
