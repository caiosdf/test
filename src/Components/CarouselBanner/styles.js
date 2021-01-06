import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${({ h }) => h}px;
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  margin: 20px 0;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.ul`
  flex: none;
  scroll-snap-align: start;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
  background-image: ${({ photo }) => (photo ? `url(${photo})` : '')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;

  h1 {
    font-size: 1.2em;
    background-color: rgba(2, 2, 2, .85);
    color: #fff;
    padding: 10px 5px;
    text-align: center;
    margin: 0;
    position: absolute;
    width: calc(100% - 10px);
    bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    z-index: 995;
  }

  :first-of-type > h1 {
    bottom: 20px;
    width: 50%;
  }

  p {
    background-color: rgba(2, 2, 2, .9);
    color: #fff;
    height: 100%;
    margin: 0;
    opacity: 0;
    transition: opacity .3s linear;
    height: calc(100% - 20px);
    padding: 10px;
    z-index: 999;
  }

  :hover > p {
    opacity: 1;
  }
`;