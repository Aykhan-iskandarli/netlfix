import Image from 'next/image'
import React from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import { featureData } from '.'
import css from "./feature.module.scss"

const FeatureWhyUseComponent = () => {
  return (
    <div className={css.feature}>
        <div className="container">
            <h1 className={css.feature_title}>Why 250,000+ people use NTF?</h1>
            <div className="row justify-center">
                    {
                        featureData.map((item:any)=>(
                           <div key={generateGuid()} className="col-md-6  col-sm-12">
                             <div className={css.feature_list}>
                                <Image src={item.img} alt=""/>
                                    <div className={css.feature_list_content}>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                            </div>
                           </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default FeatureWhyUseComponent