import styles from "./Category.module.css"


import { Images } from "@phosphor-icons/react";


 export interface Images {
  id: string;
  url: string;
  alt: string;
  text: string;
  component: () => JSX.Element;


}

interface ImagesMapProps {
  image: Images[];
  onClick: (clickedImage: Images) => void;
}
export default function Category(props: ImagesMapProps) {

  const { image, onClick } = props


  const handleClick = (clickedImage: Images) => {
    onClick(clickedImage);

    
  };

  return (
    <div className={styles.category} >


      {image ? image.map((img, index) => (
        <div key={index} className={styles.card} onClick={() => handleClick(img)} >
          <img src={img.url} alt={img.alt} />
          <p className={styles.text}>{img.text}</p>
     

        </div>
      )) : []}
    </div>
  )
};
