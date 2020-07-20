import styled from 'styled-components'
import media from 'styled-media-query'

export const TrackCard = styled.div`
  box-shadow: 0px 1px 2px grey;
  width: 32rem;
  background: ${props => props.color};
  display: flex;
  height: auto;
  color: #fff;
  transition: all 300ms;
  flex-direction: column;
  border-radius: ${props => props.borderRadius};
  margin: ${props => (props.talk ? '0ren 1ren' : null)};
  padding: ${props => (props.padded ? '1rem' : null)};
  img {
    height: 70px;
    width: 70px;
    cursor: pointer;
  }
  div {
    justify-content: center;
    align-items: center;
  }
  ${media.lessThan('huge')`
    width : 27rem;
    height : auto;
  `};
  ${media.lessThan('large')`
    width : 25rem;
    height : auto;
  `};
  ${media.lessThan('medium')`
      width : auto;
  `};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 30vh;
  width: 23rem;
  position: absolute;
  color: #000;
  border-radius: 7px;
  margin-top: 4rem;
  box-shadow: 0px 2px 3px grey;
  padding: 0.5em 0.5rem;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    margin: 0rem 1rem;
    height: 50px;
  }
  div {
    display: flex;
    justify-content: space-around;
  }
`

export const TalkCard = styled.div`
  background-image: url(${props => props.img});
  border: 1px solid grey;
  width: 30rem;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  background: #9800ff;
  border-radius: 10px;
  color: #fff;
  height: auto;
  padding: 1rem 1.5rem;
  :active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
  ${media.lessThan('huge')`
     width: 27rem;
    padding: 1rem 1rem;
  `};
  ${media.lessThan('large')`
     width: 25rem;
    padding: 1rem 1rem;
  `};
`
