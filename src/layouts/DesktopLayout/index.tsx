import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, HashNavigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import { Hero, Intro, Menu, Story, Product, Contact } from 'src/sections'
import styles from './desktop.module.scss'

interface SlideConfigsProps {
  id: string
  hash: string
  Component: React.ComponentType
}

const slideConfigs: SlideConfigsProps[] = [
  { id: '1', hash: 'hero', Component: Hero },
  { id: '2', hash: 'intro', Component: Intro },
  { id: '3', hash: 'menu', Component: Menu },
  { id: '4', hash: 'story', Component: Story },
  { id: '5', hash: 'product', Component: Product },
  { id: '6', hash: 'contact', Component: Contact }
]

const DesktopLayout: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  // ===== handle next/prev swiper =====
  const handleNavigationSwiper = (e: React.MouseEvent) => {
    if (!swiperRef.current) return

    const isLeftHalf = e.clientX < window.innerWidth / 2

    if (isLeftHalf) {
      swiperRef.current.slidePrev()
    } else {
      swiperRef.current.slideNext()
    }
  }

  return (
    <div className={styles.container} onClick={handleNavigationSwiper}>
      <Swiper
        modules={[Keyboard, HashNavigation]}
        slidesPerView={1}
        speed={0}
        loop={true}
        allowTouchMove={false}
        keyboard={{
          enabled: true,
          onlyInViewport: true
        }}
        // hashNavigation={{
        //   watchState: true,
        //   replaceState: true
        // }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {slideConfigs.map(({ id, hash, Component }) => (
          <SwiperSlide key={id} data-hash={hash}>
            <Component />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DesktopLayout
