import FeatureWhyUseComponent from 'components/home/feature-why-use/feature.component'
import HeroComponent from 'components/home/hero/hero.component'
import PriceCardComponent from 'components/home/price-cards/price-card.component'


export default function Home() {
  return (
   <>
     <HeroComponent/>
    <PriceCardComponent/>
    <FeatureWhyUseComponent/>
   </>
  )
}
