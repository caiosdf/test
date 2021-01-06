import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Slide, Item } from './styles';

export default function CarouselBanner({autoplay, source, h}){
    const carousel = useRef();
    const [settings, setSettings] = useState({ autoplay: false, slides: [], selected: 0 });

    useEffect(() => {
        setSettings({ ...settings, autoplay, slides: source });
    }, []);
    
    useEffect(() => {
        if (!settings.autoplay) return () => null;
        const timer = setInterval(() => {
          const pos = settings.selected === settings.slides.length - 1 ? 0 : settings.selected + 1;
          setSettings({ ...settings, selected: pos });
        }, 7000);
        return () => clearInterval(timer);
      });

      useEffect(() => {
        const size = carousel.current.offsetWidth;
        if (settings.selected === 0) carousel.current.scrollBy(-(size * settings.slides.length), 0);
        else carousel.current.scrollBy(size, 0);
      }, [settings.selected]);

      return(
        <Wrapper
            h={h}
            ref={carousel}
            onMouseOver={() => setSettings({ ...settings, autoplay: false })}
            onMouseLeave={() => setSettings({ ...settings, autoplay: true })}
        >
                  {
        settings.slides.map((slide, index) => (
          <Slide key={index}>
            {
              slide.map((item, area) => (
                <Item
                  key={item.id}
                  photo="https://img.freepik.com/fotos-gratis/transicao-suave-no-azul-para-o-verde_23-2147734210.jpg?size=626&ext=jpg"
                >
                  <h1>Título</h1>
                  <p>descrição do conteúdo</p>
                </Item>
              ))
            }
          </Slide>
        ))
      }
    </Wrapper>
      )
}

CarouselBanner.propTypes = {
  source: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    photo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })),
  autoplay: PropTypes.bool,
  h: PropTypes.number,
};

CarouselBanner.defaultProps = {
  source: [],
  autoplay: true,
  h: 412,
};