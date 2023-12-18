'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../container';
import CategoryBox from '../categoryBox';
import { SiAudi, SiMercedes, SiVolkswagen, SiMazda, SiNissan, SiBmw, SiAlfaromeo, SiHyundai, SiKia, SiPeugeot, SiMini, SiVolvo, SiToyota, SiLandrover } from "react-icons/si"
import { IoCarSport } from 'react-icons/io5'

export const categories = [
  {
    label: 'آئودی',
    icon:SiAudi ,
    description: 'Audi',
  },
  {
    label: 'بنز',
    icon:SiMercedes ,
    description: 'Mercedes-Benz',
  },
  {
    label: 'فولکس واگن',
    icon:SiVolkswagen ,
    description: 'Volks-Wagen',
  },
  {
    label: 'بی ام و',
    icon:SiBmw ,
    description: 'Bmw',
  },
  {
    label: 'آلفارومئو',
    icon:SiAlfaromeo ,
    description: 'Alfa-Romeo',
  },
  {
    label: 'هیوندا',
    icon:SiHyundai ,
    description: 'Hyundai',
  },
  {
    label: 'کیا',
    icon:SiKia ,
    description: 'Kia',
  },
  {
    label: 'پژو',
    icon:SiPeugeot ,
    description: 'Peugeot',
  },
  {
    label: 'مینی',
    icon:SiMini ,
    description: 'Mini',
  },
  {
    label: 'ولوو',
    icon:SiVolvo ,
    description: 'Volvo',
  },
  {
    label: 'تویوتا',
    icon:SiToyota ,
    description: 'Toyota',
  },
  {
    label: 'لندرور',
    icon:SiLandrover ,
    description: 'Land-Rover',
  },
  {
    label: 'نیسان',
    icon:SiNissan ,
    description: 'Nissan',
  },
  {
    label: 'مزدا',
    icon:SiMazda ,
    description: 'Mazda',
  },
  {
    label: 'سایر',
    icon:IoCarSport ,
    description: 'other',
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;