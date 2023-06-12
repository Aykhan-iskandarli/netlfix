  import React from 'react'
  import css from "./hero.module.scss"
  import wave from "src/assets/images/wave.svg"
  import Image from 'next/image'

  const HeroComponent = () => {
    return (
      <div className={css.hero_section}>
       <div className={css.hero_section_container}>
       <div className={css.hero_section_container_shape}>
            <Image src={wave} alt="" />
          </div>
       <div className="container">
          <div className="col-12">
          <div className={css.hero_section_container_text}>
            <p>Shared premium subscription with lower price on GamsGo</p>
          </div>
          <div className={`row justify-between mt-80 ${css.hero_section_container_activity}`}>
            <div className={css.hero_section_container_activity_count}>
              <b>250,000+</b>
              <span>Users</span>
            </div>
            <div className={css.hero_section_container_activity_count}>
              <b>1,500,000+</b>
              <span>Participations</span>
            </div>
            <div className={css.hero_section_container_activity_count}>
              <b>4+ Years</b>
              <span>Operated</span>
            </div>
          </div>
          </div>
        </div>
       </div>
      </div>
    )
  }

  export default HeroComponent